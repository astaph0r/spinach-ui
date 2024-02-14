import React from "react";

const Expertise = () => {
	return (
		<>
			<div className="self-center mt-72 text-7xl tracking-tighter text-center text-white leading-[84.36px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				Our previous experience.
			</div>

			<div className="flex gap-5 justify-between px-5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col justify-center basis-0">
					<div className="flex overflow-hidden relative flex-col items-end px-20 pt-12 pb-4 w-full aspect-[0.46] max-md:px-5">
						<img
							loading="lazy"
							alt="experience"
							src="/experience1.png"
							className="object-cover absolute inset-0 size-full"
						/>
						<div className="relative mt-52 bg-blue-900 h-[132px] w-[5px]" />
						{/* <img
							loading="lazy"
							alt="line"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeff0f9f48256492fac8b50b3e1769e1affaaf93db588ffed112d9c141999ef?"
							className="mt-14 w-12 aspect-square max-md:mt-10"
						/> */}
					</div>
				</div>
				<div className="flex flex-col flex-1 justify-center text-white">
					<div className="flex overflow-hidden relative flex-col px-12 pt-8 pb-4 w-full">
						{/* <img
							loading="lazy"
							alt="experience"
							src="/experience2.png"
							className="object-cover absolute inset-0 size-full"
						/> */}
						<img
							loading="lazy"
							alt="line"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeff0f9f48256492fac8b50b3e1769e1affaaf93db588ffed112d9c141999ef?"
							className="self-end aspect-square w-[84px]"
						/>
						<div className="relative mt-96 mr-5 max-w-full h-0.5 bg-white" />
						<div className="flex relative gap-5 justify-between  mt-4 mr-5">
							<div className="flex gap-5 justify-between my-auto">
								<div className="text-2xl leading-10">
									360 one
								</div>
                                <div className="relative bg-white w-0.5" />
								<div className="flex-auto my-auto text-base font-light leading-8">
									Mobile First Websites
								</div>
							</div>
							<img
								loading="lazy"
                                alt="arrow"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeff0f9f48256492fac8b50b3e1769e1affaaf93db588ffed112d9c141999ef?"
								className="w-10 aspect-square"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center text-white basis-0">
					<div className="flex overflow-hidden relative flex-col pt-12 pb-6 pl-12 w-full aspect-[0.46] max-md:pl-5">
						<img
							loading="lazy"
                            alt="experience"
							src="/experience3.png"
							className="object-cover absolute inset-0 size-full"
						/>
						<div className="flex relative gap-5 justify-between mt-[492px] max-md:mt-10">
							<div className="flex-auto text-2xl leading-9">
								Pay with Ring
							</div>
							<div className="my-auto text-base font-light leading-7">
								Design System & Mobile App
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Expertise;
