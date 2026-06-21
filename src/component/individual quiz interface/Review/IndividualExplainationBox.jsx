export default function IndividualExplainationBox() {
  return (
    <>
      <div className="bg-secondary-container rounded-2xl p-8 soft-xl-shadow border-l-8 border-blue-primary relative">
        <div className="absolute -top-4 left-8 bg-blue-primary text-on-primary px-4 py-1 rounded-full font-label-md text-label-md shadow-md">
          Explanation
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="grow font-semibold text-xl">
            <h4 className="font-bold text-3xl text-blue-primary mb-4">
              Mathematical Concept: Basic Differentiation
            </h4>
            <p className=" text-on-secondary-container mb-4 leading-relaxed">
              The derivative of a function measures the sensitivity to change of
              the function value with respect to its input. For the basic
              trigonometric function{" "}
              <strong className="text-blue-primary">f(x) = sin(x)</strong>, the
              derivative is consistently{" "}
              <strong className="text-blue-primary">f'(x) = cos(x)</strong>.
            </p>
            <p className="font-body-md text-body-md text-on-secondary-container leading-relaxed">
              Remember the cyclical nature of trigonometric derivatives:
              <br />• sin(x) → cos(x)
              <br />• cos(x) → -sin(x)
              <br />• -sin(x) → -cos(x)
              <br />• -cos(x) → sin(x)
            </p>
          </div>
          <div className="shrink-0 w-full  md:w-64 bg-white p-4 rounded-xl soft-xl-shadow flex flex-col items-center">
            <div className="w-full aspect-square bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden mb-3">
              <img
                alt="Trigonometry visualization"
                className="w-full h-full object-cover"
                data-alt="A clean, minimalist mathematical diagram showing the sine and cosine wave relationships on a white background with thin, elegant blue and navy lines. The lighting is bright and professional, evoking a focused academic environment with high contrast and sharp precision. The style is modern corporate education."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgiroUTC-8mVZnX5ZEUtXJXqBc2scT-Jx7g2oDxla5y2sUcEV7RVVGJTUHCI2b5sYrfaOpT47O396SjRrOvTh25GseAF4XmWjzfoDujKnob4aQ4ohMPtB_opGBEfYQ_2wx7SDEClFkZb2690K49VMQ-fxxc_5WWZzRol1pWxl6mTSnamnhh_9xaZCCgHvvKfqdB5DI1YmRH0VD1RbpHqLRnnn4DAmC19s-Vfgc-tNGJc58cj4Pm2dB8Ej9IvQofJ-2PGwkP7bgHl_5"
              />
            </div>
            <span className=" text-lg font-semibold text-outline text-center">
              Visual Aid: Unit Circle Relationship
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
