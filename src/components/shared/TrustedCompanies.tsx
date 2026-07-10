"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  {
    name: "Zillow",
    logo: "https://imgs.search.brave.com/LhWdu593zjphVwjuq9RnyNNXtt8-0W7nuACo7Fz7Tm0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cG9wcGluLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/Mi9aaWxsb3ctbG9n/by0yMDE5LndlYnA",
  },
  {
    name: "RE/MAX",
    logo: "https://imgs.search.brave.com/_d6g-epi6DrSBHV8ryXDLDBfbUkU-BhgCK0aI1e6LFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC9y/ZW1heGxvZ28tZnJl/ZWxvZ292ZWN0b3Jz/Lm5ldF8tNjQweDM2/MC5wbmc",
  },
  {
    name: "Century 21",
    logo: "https://imgs.search.brave.com/chOmh5dQPcy4427z5jtFc_Q4gc23vZbombVmrRF6Qh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cmVkZXNpZ25lZC1s/b2dvLWZvci1jZW50/dXJ5LTIxLW9sZC1h/bmQtbmV3LWxvZ28t/Zm9yLXYwLW1rc2xu/bWlmN29uZTEucG5n/P3dpZHRoPTEyODAm/Zm9ybWF0PXBuZyZh/dXRvPXdlYnAmcz0x/OWJlNzlmMGE4N2Nj/OGNhNGIxOTg2Njdj/NmViMjZiNWY3ODY5/YWM3",
  },
  {
    name: "Coldwell Banker",
    logo: "https://imgs.search.brave.com/uh_Qn9gXv81uM-zBR3v77ME0fgv8w9ngBNFOc62up70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Y29sZHdlbGwtYmFu/a2VyLnN2Zw",
  },
  {
    name: "Redfin",
    logo: "https://imgs.search.brave.com/3DNom-x05ennAHAjiol0kNjIc0kNeOrAxIH59dz8H00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIzNDk4NS5wbmc",
  },
  {
    name: "Compass",
    logo: "https://imgs.search.brave.com/lwqy-85Dvpcjbb8pLjk9iFX_iISxDTRvk0ZLYMsiDoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbW9kZXJuLW5h/dXRpY2FsLWNvbXBh/c3MtbG9nby13aXRo/LWFic3RyYWN0LWRl/c2lnbi1lbGVtZW50/cy1idXNpbmVzcy10/cmF2ZWxfMjk1MDMt/MTQwMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
  },
  {
    name: "eXp Realty",
    logo: "https://imgs.search.brave.com/7PqlUEM2fHqIKxcWhosyNTdzW_Zi6b3lT-8xyjeTcj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM5LzIvZXhwLXJl/YWx0eS1sb2dvLXBu/Z19zZWVrbG9nby0z/OTEzNTUucG5n",
  },
  {
    name: "Keller Williams",
    logo: "https://imgs.search.brave.com/MHPGSoEtxnXlwleBvU_VpqVuKtUMDSlsDLnQJHKyBF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTQ0N2Y3YjU5NTNh/NTAwMDRlZTE2ZWMu/cG5n",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="w-full border-y bg-slate-50 py-12">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Trusted Worldwide
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Trusted by Leading Real Estate Companies
        </h2>

        <p className="mt-3 text-gray-500">
          Connecting buyers, sellers and investors with industry-leading real
          estate brands.
        </p>
      </div>

      <Marquee
        speed={40}
        gradient
        gradientWidth={120}
        pauseOnHover
      >
        {companies.map((company) => (
          <div
            key={company.name}
            className="mx-5 flex h-24 w-52 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={140}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedCompanies;