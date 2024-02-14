import React from "react";

const Services = () => {
	return (
		<div className="flex flex-col items-center pt-12 px-10 md:px-20 w-full bg-white max-md:pl-5 max-md:max-w-full">
			<div className="mt-16 text-6xl tracking-tighter lg:text-center text-left text-black leading-[72px] w-[1326px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
				A design system for website & apps <br />
				is critical to resolve:
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-3 pt-2 pb-5 mt-24 gap-5 ">
				<div className="flex flex-col">
					<div className="flex gap-5 justify-between font-light">
						{/* <div className="my-auto w-px bg-neutral-200 h-[86px]" /> */}
						<div className="flex flex-col flex-1">
							<div className="text-base leading-7 text-zinc-800">
								/01
							</div>
							<div className="text-2xl leading-9 text-black">
								Inconsistent user experience.
							</div>
						</div>
					</div>
					<div className="mt-5 mb-2 self-start bg-neutral-200 w-full h-[2px] lg:hidden" />
				</div>
				<div className="flex flex-col">
					<div className="flex gap-5 justify-between font-light">
						<div className="my-auto w-px bg-neutral-200 h-[86px] hidden lg:inline-flex" />
						<div className="flex flex-col flex-1">
							<div className="text-base leading-7 text-zinc-800">
								/02
							</div>
							<div className="text-2xl leading-9 text-black">
								Design-led delays in go-to-market.
							</div>
						</div>
					</div>

					<div className="mt-5 mb-2 self-start bg-neutral-200 w-full h-[2px] lg:hidden" />
				</div>
				<div className="flex flex-col">
					<div className="flex gap-5 justify-between font-light">
						<div className="my-auto w-px bg-neutral-200 h-[86px] hidden lg:inline-flex" />
						<div className="flex flex-col flex-1">
							<div className="text-base leading-7 text-zinc-800">
								/03
							</div>
							<div className="text-2xl leading-9 text-black">
								Disjointed digital brand image.
							</div>
						</div>
					</div>
					<div className="mt-5 mb-2 self-start bg-neutral-200 w-full h-[2px] lg:hidden" />
				</div>
				<div className="flex flex-col">
					<div className="flex gap-5 justify-between font-light">
						<div className="my-auto w-px bg-neutral-200 h-[86px] hidden lg:inline-flex" />
						<div className="flex flex-col flex-1">
							<div className="text-base leading-7 text-zinc-800">
								/04
							</div>
							<div className="text-2xl leading-9 text-black">
								Disconnected dev-design sprints.
							</div>
						</div>
					</div>

					<div className="mt-5 mb-2 self-start bg-neutral-200 w-full h-[2px] lg:hidden" />
				</div>
			</div>
			{/* <div className="justify-center pt-2 pb-5 mt-24 max-w-full w-[1596px] max-md:pr-5 max-md:mt-10">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
						<div className="flex flex-col font-light max-md:mt-10">
							<div className="text-base leading-7 text-zinc-800">
								/01
							</div>
							<div className="mt-6 text-2xl leading-9 text-black">
								Inconsistent user experience.
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-between font-light max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
							<div className="my-auto w-px bg-neutral-200 h-[86px]" />
							<div className="flex flex-col flex-1">
								<div className="text-base leading-7 text-zinc-800">
									/02
								</div>
								<div className="mt-6 text-2xl leading-9 text-black">
									Design-led delays in go-to-market.
								</div>
							</div>
							<div className="my-auto w-px bg-neutral-200 h-[86px]" />
							<div className="flex flex-col flex-1">
								<div className="text-base leading-7 text-zinc-800">
									/03
								</div>
								<div className="mt-6 text-2xl leading-9 text-black">
									Disjointed digital brand image.
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-between font-light max-md:mt-10">
							<div className="my-auto w-px bg-neutral-200 h-[86px]" />
							<div className="flex flex-col flex-1">
								<div className="text-base leading-7 text-zinc-800">
									/04
								</div>
								<div className="mt-6 text-2xl leading-9 text-black">
									Disconnected dev-design sprints.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="mt-20 h-0.5 bg-black w-[60px] max-md:mt-10" />
			<div className="mt-36 text-4xl tracking-tighter leading-10 lg:text-center text-left text-black max-md:mt-10 max-md:max-w-full">
				Our proven methodology for Design Systems.
			</div>
			<div className="mt-8 text-2xl font-light leading-9 lg:text-center text-left text-zinc-800 w-[1056px] max-md:max-w-full">
				Redesigning a design system is a densely strategised process
				that involves careful planning, collaboration, and iterative
				refinement.
			</div>
			<div className="flex gap-5 justify-between items-start mt-16 ml-14">
				<div className="w-1.5 bg-blue-900 h-[132px]" />
				<div className="flex overflow-hidden relative flex-col flex-1 px-10 py-11 mt-9 text-xl font-light leading-8 min-h-[654px] text-neutral-200">
					<img
						loading="lazy"
						alt="phase0"
						src="/phase0.png"
						className="object-cover absolute inset-0 size-full"
					/>
					<div className="relative self-start mt-72 text-base leading-7 max-md:mt-10">
						Phase 0
					</div>
					<div className="relative mt-4 text-2xl leading-9 text-white w-[436px]">
						Project planning and <br />
						kick-off
					</div>
					<div className="flex relative gap-4 justify-between py-2.5 mt-8 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
						<div className="my-auto w-2.5 h-2.5 rounded-full bg-neutral-200" />
						<div className="grow">Material download</div>
					</div>
					<div className="flex relative gap-4 justify-between py-2 mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
						<div className="my-auto w-2.5 h-2.5 rounded-full bg-neutral-200" />
						<div className="grow">
							Kick-off and project planning
						</div>
					</div>
					<div className="flex relative gap-4 justify-between py-2 mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
						<div className="my-auto w-2.5 h-2.5 rounded-full bg-neutral-200" />
						<div className="grow">Ways of working</div>
					</div>
					<div className="flex relative gap-4 justify-between py-2 mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
						<div className="my-auto w-2.5 h-2.5 rounded-full bg-neutral-200" />
						<div className="grow">Goals and objectives</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 mt-9 max-md:max-w-full">
					<div className="max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
								<div className="flex overflow-hidden relative flex-col items-start py-12 pr-20 pl-10 min-h-[516px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
									<img
										loading="lazy"
										alt="phase2"
										src="/phase2.png"
										className="object-cover absolute inset-0 size-full"
									/>
									<div className="relative mt-80 text-base font-light leading-7 text-neutral-200 max-md:mt-10">
										Phase 2
									</div>
									<div className="relative mt-4 text-2xl leading-9 text-white">
										Design System mapping and Moodboarding
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
								<div className="flex overflow-hidden relative flex-col py-12 pl-10 aspect-[0.26] w-[138px] max-md:mt-6">
									<img
										// loading="lazy"
										alt="phase3"
										src="/phase3.png"
										className="object-cover absolute inset-0 size-full"
									/>
									<div className="relative mt-80 text-base font-light leading-7 text-neutral-200 max-md:mt-10">
										Phase 3
									</div>
									<div className="relative mt-4 text-2xl leading-9 text-white">
										MVP Style guide and A/B Testing
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-24 max-w-full h-px bg-neutral-200 w-[1596px] max-md:mt-10" />
			<div className="flex gap-5 justify-between items-start mt-52 ml-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col flex-1 lg:text-center text-left max-md:max-w-full">
					<div className="text-7xl tracking-tighter text-black leading-[84.36px] max-md:max-w-full max-md:text-4xl">
						Design system process highlights:
					</div>
					<div className="mt-10 text-2xl font-light leading-9 text-zinc-800 w-[1056px] max-md:max-w-full">
						A Design System redesign roadmap has to be delicately
						handled and marked out with much careful consideration
						rather than impulse.
					</div>
				</div>
			</div>
			<div class="grid md:grid-cols-2 grid-cols-1 gap-5 justify-between mt-24 mx-auto w-full font-light text-zinc-800 pb-12 ">
				<div className="flex flex-col items-start pt-2 max-md:max-w-full">
					<div className="text-base leading-7">/01</div>
					<div className="mt-5 text-4xl tracking-tighter leading-10 text-black w-11/12 pr-24">
						Research first.
					</div>
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						Our research is designed to interview stakeholders,
						end-users, and decision-makers in order to grasp diverse
						needs. We incorporate findings into a comprehensive
						strategy that aligns with business goals, ensuring the
						Design system meets user expectations and industry
						standards.
					</div>

					<div className="mt-5 mb-2 self-start bg-neutral-200 w-11/12 h-[2px]" />
				</div>
				<div className="flex flex-col items-start pt-2 max-md:max-w-full">
					<div className="text-base leading-7">/02</div>
					<div className="mt-5 text-4xl tracking-tighter leading-10 text-black w-11/12 pr-24">
						Brand-centric DLS.
					</div>
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						To reinforce the brand's visual identity, values and
						tone of voice, we build consistency in the use of brand
						colours, typography, and imagery, coupled with intuitive
						interactions to foster brand affinity and loyalty across
						all touchpoints.
					</div>
				</div>
				<div className="flex flex-col pt-2 max-md:max-w-full">
					<div className="text-base leading-7 max-md:max-w-full">
						/03
					</div>{" "}
					<div className="mt-6 text-4xl tracking-tighter leading-10 text-black w-11/12 pr-24">
						Design principles and guidelines.
					</div>{" "}
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						Based on design trends, research outcomes and brand
						essence, we identify core values, guidelines and themes
						that drive the design creation process and craft an
						experience that is unique to the brand for its users.
					</div>
				</div>
				<div className="flex flex-col pt-2 max-md:max-w-full">
					<div className="text-base leading-7 max-md:max-w-full">
						/04
					</div>{" "}
					<div className="mt-5 text-4xl tracking-tighter leading-10 text-black  w-11/12 pr-24">
						Modularity for multiple  use-cases.
					</div>{" "}
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						We adopt a modular process of Design System creation.
						Based on use-cases and development prioritization we
						create components, patterns and templates that empower
						the design and dev teams to scale the sprint outcomes
						exponentially.
					</div>
				</div>
				<div className="flex flex-col pt-2 max-md:max-w-full">
					<div className="text-base leading-7 max-md:max-w-full">
						/05
					</div>{" "}
					<div className="mt-5 text-4xl tracking-tighter leading-10 text-black w-11/12 pr-24">
						Cross-functional collaboration.
					</div>{" "}
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						Our Design System collaboration is characterized by an
						inclusive working approach, fostering outcomes that
						excel in scale, efficiency and cost-effectiveness. We
						drive results that go beyond expectations, ensuring a
						synergy of creativity and practicality for optimal
						Design System performance.
					</div>
				</div>{" "}
				<div className="flex flex-col pt-2 max-md:max-w-full">
					<div className="text-base leading-7 max-md:max-w-full">
						/06
					</div>{" "}
					<div className="mt-5 text-4xl tracking-tighter leading-10 text-black w-11/12 pr-24">
						Version control and documentation handover.
					</div>{" "}
					<div className="mt-9 text-xl leading-8 w-11/12 pr-24">
						We manage the handover process meticulously, with robust
						documentation and tight governance. Our processes ensure
						lasting consistency and quality, facilitating a seamless
						transition and nurturing the sustained success of the
						design system over time.
					</div>
				</div>
			</div>
			{/* <div className="flex gap-5 justify-between mt-24 w-full font-light max-w-[1489px] text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col flex-1 pb-12 max-md:max-w-full">
					<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
						<div className="flex flex-col items-start pt-2 max-md:max-w-full">
							<div className="text-base leading-7">/01</div>
							<div className="mt-5 text-4xl tracking-tighter leading-10 text-black">
								Research first.
							</div>
							<div className="mt-9 text-xl leading-8 max-md:max-w-full">
								Our research is designed to interview
								stakeholders, end-users, and decision-makers in
								order to grasp diverse needs. We incorporate
								findings into a comprehensive strategy that
								aligns with business goals, ensuring the Design
								system meets user expectations and industry
								standards.
							</div>
						</div>
						<div className="flex flex-col items-start pt-2 max-md:max-w-full">
							<div className="text-base leading-7">/02</div>
							<div className="mt-5 text-4xl tracking-tighter leading-10 text-black">
								Brand-centric DLS.
							</div>
							<div className="mt-9 text-xl leading-8 max-md:max-w-full">
								To reinforce the brand's visual identity, values
								and tone of voice, we build consistency in the
								use of brand colours, typography, and imagery,
								coupled with intuitive interactions to foster
								brand affinity and loyalty across all
								touchpoints.
							</div>
						</div>
					</div>{" "}
					<div className="flex gap-5 justify-between mt-44 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
						<div className="flex flex-col pt-2 max-md:max-w-full">
							<div className="text-base leading-7 max-md:max-w-full">
								/03
							</div>{" "}
							<div className="mt-6 text-4xl tracking-tighter leading-10 text-black max-md:max-w-full">
								Design principles and guidelines.
							</div>{" "}
							<div className="mt-7 text-xl leading-8 max-md:max-w-full">
								Based on design trends, research outcomes and
								brand essence, we identify core values,
								guidelines and themes that drive the design
								creation process and craft an experience that is
								unique to the brand for its users.
							</div>
						</div>{" "}
						<div className="flex flex-col pt-2 max-md:max-w-full">
							<div className="text-base leading-7 max-md:max-w-full">
								/04
							</div>{" "}
							<div className="mt-5 text-4xl tracking-tighter leading-10 text-black max-md:max-w-full">
								Modularity for multiple <br />
								use-cases.
							</div>{" "}
							<div className="mt-9 text-xl leading-8 max-md:max-w-full">
								We adopt a modular process of Design System
								creation. Based on use-cases and development
								prioritization we create components, patterns
								and templates that empower the design and dev
								teams to scale the sprint outcomes
								exponentially.
							</div>
						</div>
					</div>{" "}
					<div className="flex gap-5 justify-between mt-44 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
						<div className="flex flex-col pt-2 max-md:max-w-full">
							<div className="text-base leading-7 max-md:max-w-full">
								/05
							</div>{" "}
							<div className="mt-5 text-4xl tracking-tighter leading-10 text-black max-md:max-w-full">
								Cross-functional collaboration.
							</div>{" "}
							<div className="mt-9 text-xl leading-8 max-md:max-w-full">
								Our Design System collaboration is characterized
								by an inclusive working approach, fostering
								outcomes that excel in scale, efficiency and
								cost-effectiveness. We drive results that go
								beyond expectations, ensuring a synergy of
								creativity and practicality for optimal Design
								System performance.
							</div>
						</div>{" "}
						<div className="flex flex-col pt-2 max-md:max-w-full">
							<div className="text-base leading-7 max-md:max-w-full">
								/06
							</div>{" "}
							<div className="mt-5 text-4xl tracking-tighter leading-10 text-black max-md:max-w-full">
								Version control and documentation handover.
							</div>{" "}
							<div className="mt-9 text-xl leading-8 max-md:max-w-full">
								We manage the handover process meticulously,
								with robust documentation and tight governance.
								Our processes ensure lasting consistency and
								quality, facilitating a seamless transition and
								nurturing the sustained success of the design
								system over time.
							</div>
						</div>
					</div>
				</div>{" "}
				<div className="my-auto w-1.5 bg-blue-900 h-[132px]" />
			</div>{" "} */}
			<div className="flex gap-5 justify-between items-center mt-36 text-5xl tracking-tighter text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
				<div className="my-auto w-16 h-px bg-black" />{" "}
				<div className="flex-auto max-md:max-w-full max-md:text-4xl">
					Design Systems are ideal for :
				</div>{" "}
				<div className="my-auto w-16 h-px bg-black" />
			</div>{" "}
			<div className="z-10 px-16 py-12 mt-16 -mb-16 max-w-full bg-white w-[1326px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-between mt-2.5 font-light text-zinc-800 max-md:mt-10">
							<div className="text-base leading-7 text-left">
								/01
							</div>{" "}
							<div className="text-2xl leading-9 w-[300px]">
								Websites, apps and products
							</div>
						</div>
					</div>{" "}
					<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-between mt-2.5 font-light text-zinc-800 max-md:mt-10">
							<div className="text-base leading-7 text-left">
								/02
							</div>{" "}
							<div className="flex-auto text-2xl leading-9">
								Product teams
							</div>
						</div>
					</div>{" "}
					<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-between mt-2.5 font-light text-zinc-800 max-md:mt-10">
							<div className="text-base leading-7 text-left">
								/03
							</div>{" "}
							<div className="text-2xl leading-9 w-[300px]">
								SaaS and Enterprise <br />
								start-ups
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
