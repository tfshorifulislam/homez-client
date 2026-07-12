"use client";

import { useSession } from "@/lib/auth-client";
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

    // এখানে আপনি imageFile টি ব্যাকএন্ড বা ক্লাউড সার্ভারে (যেমন Cloudinary) আপলোড করে URL পেতে পারেন।
    // আপাতত অবজেক্ট তৈরিতে এটি ফাইল আকারে রাখা হলো।
    const property = {
      ...formData,
      imageFile: imageFile,
      price: Number(formData.price),
      rating: Number(formData.rating),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      garage: Number(formData.garage),
      featured: formData.featured === "true",
      userEmail: session?.user?.email,
      userName: session?.user?.name,
    };

    console.log(property);
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
            <div className="space-y-2">
              <Label className="text-base font-semibold">Property Image</Label>
              <div
                onClick={() => !imagePreview && fileInputRef.current?.click()}
                className={`group relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all duration-200 ${imagePreview
                  ? "border-muted bg-muted/10 p-2"
                  : "border-muted-foreground/20 hover:border-primary hover:bg-primary/5 cursor-pointer"
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
                  <div className="relative w-full overflow-hidden rounded-lg aspect-[16/7]">
                    <img
                      src={imagePreview}
                      alt="Property preview"
                      className="h-full w-full object-cover object-center"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute right-3 top-3 h-8 w-8 rounded-full shadow-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <ImagePlus className="h-6 w-6" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      Click to upload property image
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Supports JPG, PNG or WEBP (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="separator border-t border-muted my-6" />

            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-foreground/90">Basic Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g. Luxurious Penthouse with Skyline View"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1.5 focus-visible:ring-primary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describe the main attractions, amenities, and neighborhood details..."
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1.5 resize-none focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Price, Location, Details */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground/90">Pricing & Location</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>

                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="price"
                      type="number"
                      name="price"
                      placeholder="125000"
                      value={formData.price}
                      onChange={handleChange}
                      className="h-11 pl-10"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label>Property Type</Label>

                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        propertyType: value ?? "",
                      }));
                    }}
                  >
                    <SelectTrigger className="h-11">
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
                  <Label htmlFor="location">Location</Label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="location"
                      name="location"
                      placeholder="Gulshan, Dhaka"
                      value={formData.location}
                      onChange={handleChange}
                      className="h-11 pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>

                  <Input
                    id="category"
                    name="category"
                    placeholder="Apartment"
                    value={formData.category}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground/90">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div>
                  <Label htmlFor="bedrooms" className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-muted-foreground" /> Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="mt-1.5 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="bathrooms" className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-muted-foreground" /> Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="mt-1.5 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="area" className="flex items-center gap-1.5"><Square className="h-4 w-4 text-muted-foreground" /> Area (sqft)</Label>
                  <Input
                    id="area"
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="mt-1.5 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="garage" className="flex items-center gap-1.5"><Car className="h-4 w-4 text-muted-foreground" /> Garage</Label>
                  <Input
                    id="garage"
                    type="number"
                    name="garage"
                    value={formData.garage}
                    onChange={handleChange}
                    className="mt-1.5 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label>User Name</Label>
                  <Input value={session?.user?.name ?? ""} readOnly className="mt-1.5 bg-muted/50 cursor-not-allowed" />
                </div>

                <div>
                  <Label>User Email</Label>
                  <Input value={session?.user?.email ?? ""} readOnly className="mt-1.5 bg-muted/50 cursor-not-allowed" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" className="w-full py-6 text-base font-semibold transition-all duration-200 shadow-md bg-blue-600 cursor-pointer hover:bg-blue-500">
                Publish Property Listing
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddPropertyPage;