'use client'


import Image from "next/image"

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription action
  }

  return (
    <section className="py-12 sm:py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        {/* Rounded Sand Card Container */}
        <div className="bg-[#FAF3EB] rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-section">

          {/* Left Column: Form & Copy */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-serif italic font-normal text-primary mx-auto lg:mx-0">
              Stay ahead of the future of care
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-primary/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              Receive product updates, industry insights, compliance guidance, and care management best practices.
            </p>

            {/* Input Subscription Form */}
            <form onSubmit={handleSubmit} className="flex w-full max-w-md items-stretch rounded-xl bg-white border border-slate-200/50 overflow-hidden mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent px-3 sm:px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none w-0"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-3 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column: Full-Bleed Caregiver Graphic */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[400px] lg:-left-15">
              <Image
                src="/images/home-page/stay-ahead-of-the-future-of-care.png"
                alt="Caregiver smiling with senior resident"
                fill
                priority
                className="object-contain object-left-bottom "
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
