import React from "react";

const About = () => {
	return (
		<>
			<div className="flex gap-5 justify-between items-start self-center mt-24 w-full text-center max-w-[1489px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col flex-1 self-start max-md:max-w-full">
					<div className="text-7xl tracking-tighter text-white leading-[84.36px] max-md:max-w-full max-md:text-4xl">
						Design Systems for scale
					</div>
					<div className="self-center mt-10 text-2xl font-light leading-9 text-neutral-400 w-[1056px] max-md:max-w-full">
						Add consistency to the scaling up of User Experience
						with an organized <br />
						assembly of guidelines, components and documentation.
					</div>
				</div>
				<div className="self-end mt-36 w-1.5 bg-blue-900 h-[132px] max-md:mt-10" />
			</div>
			<img
				loading="lazy"
                alt="illustration"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ebd2019dccbea98e6f0c8af6a39a173755e221d4a8911b479fb44b4122d1994?"
				className="mt-4 w-full aspect-[2.56] max-md:max-w-full"
			/>
		</>
	);
};

export default About;
