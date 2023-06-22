import React, { useEffect, useContext, createContext, useState } from 'react';
import Hero from '../landing/Hero';
import ScriptSection from '../landing/ScriptSection';
import FlowSection from '../landing/FlowSection';
import AppSection from '../landing/AppSection';
import CoreSection from '../landing/CoreSection';
import Footer from '../landing/Footer';
import IntergrationList from '../landing/IntergrationList';
import LandingSection from '../landing/LandingSection';
import CallToAction from '../landing/CallToAction';
import EntrepriseFeatures from '../landing/EntrepriseFeatures';
import Head from '@docusaurus/Head';
import HeroExample from '../landing/HeroExample';
import LandingHeader from '../landing/LandingHeader';

const DeveloperModeContext = createContext();

export function useDeveloperMode() {
	return useContext(DeveloperModeContext);
}

function HomepageHeader() {
	const [developerMode, setDeveloperMode] = useState(false);

	// Force light theme on landing page
	document.documentElement.setAttribute('data-theme', 'light');

	useEffect(() => {
		window.plausible =
			window.plausible ||
			function () {
				(window.plausible.q = window.plausible.q || []).push(arguments);
			};
	});

	return (
		<DeveloperModeContext.Provider
			value={{
				developerMode,
				setDeveloperMode
			}}
		>
			<LandingHeader />
			<Hero />
			<HeroExample />

			<CoreSection
				title="Scripts"
				caption="No overhead, scalable, self-hostable FaaS"
				cards={[]}
				description={
					'Run long-running heavy background jobs, script with complex dependencies, endpoints with high rpm or simple one-off tasks without any overhead. Trigger them from a webhook or the auto-generated UI and monitor them easily.'
				}
				color="blue"
				key="script-card"
				kind="script"
			/>
			<ScriptSection />
			<FlowSection />
			<AppSection />

			<IntergrationList />
			<EntrepriseFeatures />
			<LandingSection bgClass="bg-white">
				<CallToAction />
			</LandingSection>
			<Footer />
		</DeveloperModeContext.Provider>
	);
}

export default function Home() {
	return (
		<main>
			<Head>
				<title>Windmill | Open source platform to build internal tools with scripts</title>
				<meta name="title" content="Internal tools with scripts." />
				<meta
					name="description"
					content="Open source low code framework to turn scripts into workflows and internal apps with auto-generated UIs in minutes"
				/>
			</Head>
			<HomepageHeader />
		</main>
	);
}
