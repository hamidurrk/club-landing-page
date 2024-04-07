import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Vertical from '@/components/Vertical';

export default function Home() {

  return (
    <>
      <div className="bg-background max-w-screen">
        <Navbar />        
        <section className="wrap-md wrap-px mx-auto px-12 pt-4 xl:w-4/5 h-full">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 row-span-1 mt-12 aspect-auto h-[40vh] content-center items-center gap-4 overflow-hidden rounded-xl bg-bento p-8 shadow-sm sm:p-12 ">
              <div className="content relative z-10 flex max-w-full flex-wrap gap-4 sm:max-w-72 md:max-w-96">
                <h2 className="mb-0 text-3xl font-bold sm:text-3xl md:text-4xl m-auto text-center">
                  The <text className="text-primary">Team</text>
                </h2>
              </div>
            </div>
            <div className="col-span-4 row-span-2">
              <div className="mt-12 grid grid-cols-4 gap-5">
                <div className="col-span-4 row-span-1 lg:col-span-2">
                <div className="relative flex h-full flex-wrap content-center gap-4 overflow-hidden rounded-xl bg-accent p-8 shadow-sm sm:p-12 md:aspect-auto md:content-start">
                    <div className="content relative z-10 flex flex-wrap justify-center gap-4 text-center">
                      <div className="from-primary-200 via-primary-400 to-primary-600 rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
                        <img src="" alt="" className="h-full w-full md:w-16" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-1 lg:col-span-2 ">
                  <div className="relative flex h-full flex-wrap content-start overflow-hidden rounded-xl bg-bento px-4 py-8 shadow-sm md:aspect-auto">
                  <div className="relative flex h-fit w-full items-center justify-center">
                      <div className="content z-10 flex flex-wrap content-center justify-center gap-1 text-white md:max-w-64">
                        
                      <div className="image-container max-h-[40vh] bottom-0 ">
                        <img src="/logo.png" alt="" className="h-full m-auto" />
                      </div>
                      <h2 className="mb-0 w-full text-center text-xl font-bold md:text-2xl">
                          Some title for the club
                        </h2>
                        <p>Some other part</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-1 lg:col-span-2 ">
                  <div className="relative flex h-full flex-wrap content-start overflow-hidden rounded-xl bg-bento px-4 py-8 shadow-sm md:aspect-auto">
                  <div className="relative flex h-fit w-full items-center justify-center">
                      <div className="content z-10 flex flex-wrap content-center justify-center gap-1 text-white md:max-w-64">
                        
                      <div className="image-container max-h-[40vh] bottom-0 ">
                        <img src="/logo.png" alt="" className="h-full m-auto" />
                      </div>
                      <h2 className="mb-0 w-full text-center text-xl font-bold md:text-2xl">
                          Some title for the club
                        </h2>
                        <p>Some other part</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-1 lg:col-span-2 ">
                  <div className="relative flex h-full flex-wrap content-start overflow-hidden rounded-xl bg-bento px-4 py-8 shadow-sm md:aspect-auto">
                  <div className="relative flex h-fit w-full items-center justify-center">
                      <div className="content z-10 flex flex-wrap content-center justify-center gap-1 text-white md:max-w-64">
                        
                      <div className="image-container max-h-[40vh] bottom-0 ">
                        <img src="/logo.png" alt="" className="h-full m-auto" />
                      </div>
                      <h2 className="mb-0 w-full text-center text-xl font-bold md:text-2xl">
                          Some title for the club
                        </h2>
                        <p>Some other part</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-1 lg:col-span-2 ">
                  <div className="relative flex h-full flex-wrap content-start overflow-hidden rounded-xl bg-bento px-4 py-8 shadow-sm md:aspect-auto">
                  <div className="relative flex h-fit w-full items-center justify-center">
                      <div className="content z-10 flex flex-wrap content-center justify-center gap-1 text-white md:max-w-64">
                        
                      <div className="image-container max-h-[40vh] bottom-0 ">
                        <img src="/logo.png" alt="" className="h-full m-auto" />
                      </div>
                      <h2 className="mb-0 w-full text-center text-xl font-bold md:text-2xl">
                          Some title for the club
                        </h2>
                        <p>Some other part</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-1 lg:col-span-2 ">
                  <div className="relative flex h-full flex-wrap content-start overflow-hidden rounded-xl bg-bento px-4 py-8 shadow-sm md:aspect-auto">
                  <div className="relative flex h-fit w-full items-center justify-center">
                      <div className="content z-10 flex flex-wrap content-center justify-center gap-1 text-white md:max-w-64">
                        
                      <div className="image-container max-h-[40vh] bottom-0 ">
                        <img src="/logo.png" alt="" className="h-full m-auto" />
                      </div>
                      <h2 className="mb-0 w-full text-center text-xl font-bold md:text-2xl">
                          Some title for the club
                        </h2>
                        <p>Some other part</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
