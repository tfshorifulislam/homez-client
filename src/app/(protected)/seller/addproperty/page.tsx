"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImagePlus, X, Building2, DollarSign, MapPin, Calendar, BedDouble, Bath, Square, Car } from "lucide-react";
import { toast } from "react-toastify";

const AddPropertyPage = () => {
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    location: "",
    date: "",
    category: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    garage: "",
    propertyType: "",
    featured: "false",
    isActive: "inActive",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }

    try {
      // Upload image to ImgBB
      const formDataImage = new FormData();
      formDataImage.append("image", imageFile);

      const uploadResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB}`,
        {
          method: "POST",
          body: formDataImage,
        }
      );

      const uploadResult = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadResult.success) {
        throw new Error(uploadResult.error?.message || "Image upload failed");
      }

      const imageUrl = uploadResult.data.url;

      // Property Object
      const property = {
        image: imageUrl,
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        rating: Number(formData.rating),
        location: formData.location,
        date: formData.date,
        category: formData.category,
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        area: Number(formData.area),
        garage: Number(formData.garage),
        propertyType: formData.propertyType,
        featured: formData.featured === "true",
        isActive: formData.isActive,
        userEmail: session?.user?.email,
        userName: session?.user?.name,
      };


      const { data: userToken } = await authClient.token();

      if (!userToken) {
        console.error("Token not found");
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/addproperty`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken.token}`,
        },
        body: JSON.stringify(property),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save property");
      }

      toast.success("Property added successfully!");

      // Reset Form
      setFormData({
        title: "",
        description: "",
        price: "",
        rating: "",
        location: "",
        date: "",
        category: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        garage: "",
        propertyType: "",
        featured: "false",
        isActive: "inActive",
      });

      removeImage();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <Card className="border-muted shadow-lg backdrop-blur-sm">
        <CardHeader className="space-y-1 border-b bg-muted/20 p-6">
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-2xl font-bold tracking-tight text-blue-600">List a New Property</CardTitle>
          </div>
          <CardDescription>
            Provide detailed information to list your property on the marketplace.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Image Upload Section */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-slate-800">
                Property Image
              </Label>

              <div
                onClick={() => !imagePreview && fileInputRef.current?.click()}
                className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${imagePreview
                  ? "border-slate-200 bg-slate-50 p-2 shadow-sm"
                  : "cursor-pointer border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50 hover:border-blue-500 hover:bg-blue-50/70 hover:shadow-lg p-8"
                  }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
                    <img
                      src={imagePreview}
                      alt="Property preview"
                      className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute right-4 top-4 h-9 w-9 rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <ImagePlus className="h-8 w-8" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-800">
                      Upload Property Image
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Click or drag & drop your property image here
                    </p>

                    <span className="mt-4 inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
                      JPG • PNG • WEBP • Max 5MB
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="separator border-t border-muted my-6" />

            {/* Basic Information */}
            {/* Basic Information */}
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Basic Information
                  </h3>
                  <p className="text-sm text-slate-500">
                    Enter the basic details of your property.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Property Title
                  </Label>

                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g. Luxurious Penthouse with Skyline View"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Detailed Description
                  </Label>

                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Describe the property's features, nearby facilities, amenities, neighborhood, transportation, and anything buyers should know..."
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-2 resize-none rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Location */}
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Pricing & Location
                  </h3>
                  <p className="text-sm text-slate-500">
                    Set the pricing and location details for your property.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Price */}
                <div className="space-y-2">
                  <Label
                    htmlFor="price"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Price ($)
                  </Label>

                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <Input
                      id="price"
                      type="number"
                      name="price"
                      placeholder="125000"
                      value={formData.price}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-slate-300 pl-11 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-slate-700">
                    Property Type
                  </Label>

                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        propertyType: value ?? "",
                      }));
                    }}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                      <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="For sale">
                        For Sale
                      </SelectItem>

                      <SelectItem value="For rent">
                        For Rent
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Location
                  </Label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <Input
                      id="location"
                      name="location"
                      placeholder="Gulshan, Dhaka"
                      value={formData.location}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-slate-300 pl-11 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label
                    htmlFor="category"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Category
                  </Label>

                  <Input
                    id="category"
                    name="category"
                    placeholder="Apartment"
                    value={formData.category}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Specifications
                  </h3>
                  <p className="text-sm text-slate-500">
                    Add the key specifications of your property.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Bedrooms */}
                <div className="space-y-2">
                  <Label
                    htmlFor="bedrooms"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <BedDouble className="h-5 w-5 text-blue-600" />
                    Bedrooms
                  </Label>

                  <Input
                    id="bedrooms"
                    type="number"
                    name="bedrooms"
                    placeholder="3"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Bathrooms */}
                <div className="space-y-2">
                  <Label
                    htmlFor="bathrooms"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Bath className="h-5 w-5 text-blue-600" />
                    Bathrooms
                  </Label>

                  <Input
                    id="bathrooms"
                    type="number"
                    name="bathrooms"
                    placeholder="2"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Area */}
                <div className="space-y-2">
                  <Label
                    htmlFor="area"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Square className="h-5 w-5 text-blue-600" />
                    Area (sqft)
                  </Label>

                  <Input
                    id="area"
                    type="number"
                    name="area"
                    placeholder="1500"
                    value={formData.area}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Garage */}
                <div className="space-y-2">
                  <Label
                    htmlFor="garage"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Car className="h-5 w-5 text-blue-600" />
                    Garage
                  </Label>

                  <Input
                    id="garage"
                    type="number"
                    name="garage"
                    placeholder="1"
                    value={formData.garage}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-300 transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 rounded-full bg-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Owner Information
                  </h3>
                  <p className="text-sm text-slate-500">
                    These details are automatically filled from your account.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-slate-700">
                    User Name
                  </Label>

                  <Input
                    value={session?.user?.name ?? ""}
                    readOnly
                    className="h-12 rounded-xl border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-slate-700">
                    User Email
                  </Label>

                  <Input
                    value={session?.user?.email ?? ""}
                    readOnly
                    className="h-12 rounded-xl border-slate-200 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Publishing...
                  </>
                ) : (
                  "Publish Property Listing"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddPropertyPage;