import React from "react";

const About = () => {
	return (
		<div id="about">
			<div className="flex gap-5 justify-between items-start px-5 self-center mt-24 w-full text-center">
				<div className="flex flex-col flex-1 self-start px-10">
					<div className="text-7xl tracking-tighter lg:text-center text-left text-white leading-[84.36px]">
						Design Systems for scale
					</div>
					<div className="self-center mt-10 text-2xl lg:text-center text-left font-light leading-9 text-neutral-400">
						Add consistency to the scaling up of User Experience
						with an organized <br />
						assembly of guidelines, components and documentation.
					</div>
				</div>
				<div className="self-end mt-36 w-1.5 bg-blue-900 h-[132px] hidden lg:inline-flex" />
			</div>
			<img
				loading="lazy"
                alt="illustration"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ebd2019dccbea98e6f0c8af6a39a173755e221d4a8911b479fb44b4122d1994?"
				className="mt-4 w-full"
			/>
		</div>
	);
};

export default About;
