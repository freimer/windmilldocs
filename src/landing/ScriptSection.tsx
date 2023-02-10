import React from 'react';
import LandingSection from './LandingSection';
import {
	Code,
	FormInput,
	Github,
	Key,
	WebhookIcon,
	Database,
	Play,
	Terminal,
	CalendarClock,
	History,
	FormInputIcon,
	FileCode,
	FileLock2
} from 'lucide-react';
import FeatureCardTabs from './tabs/FeatureCardTabs';
import { SiGnubash, SiGo, SiPython, SiDeno } from 'react-icons/si/index';
import SectionExamples from './SectionExamples';
import { ExternalLink } from 'lucide-react';

const newTabs = [
	{
		label: 'Polyglot',
		icon: Code,
		id: 'script',
		data: [
			{
				title: 'Typescript',
				description: '',
				icon: SiDeno,
				caption: 'Deno as the typescript runtime.',
				svg: '/images/typescript-code.svg'
			},
			{
				title: 'Python',
				description: '',
				icon: SiPython,
				caption: 'Python 3.11 environment.',
				svg: '/images/python-code.svg'
			},
			{
				title: 'Go',
				icon: SiGo,
				caption: '',
				svg: '/images/go-code.svg'
			},
			{
				title: 'Bash',
				icon: SiGnubash,
				caption: '',
				svg: '/images/bash-code.svg'
			},
			{
				title: 'PostgreSQL / MySQL',
				icon: Database,
				caption: '',

				svg: '/images/sql-code.svg'
			}
		]
	},
	{
		label: 'Autogenerated UI',
		icon: FormInputIcon,
		id: 'autogenerated-ui',
		data: [
			{
				title: 'Autogenerated UI',
				description:
					'Share your app with non-technical users without spending time building the UI. It’s automatically generated from script parameters, and customizable.',
				icon: FormInputIcon,
				caption:
					"Share your app with non-technical users without spending time building the UI. It's automatically generated from script parameters, and customizable.",
				video: {
					videoSrc: '/videos/autogenerated-ui.mp4',
					videoLength: '26'
				}
			}
		]
	},
	{
		label: 'Web IDE/Github',
		icon: FileCode,
		id: 'web-ide-github-sync',
		data: [
			{
				title: 'Web IDE',
				description: 'LSP support for Typescript, Python, Go and Bash scripts.',
				icon: FileCode,
				caption: 'LSP: LSP support for Typescript, Python, Go and Bash scripts.',
				imageSrc: '/images/error-handler.png'
			},
			{
				title: 'Github Sync',
				description: 'Scripts are always versioned.',
				icon: Github,
				caption: 'Scripts are always versioned.',
				imageSrc: '/images/error-handler.png'
			},
			{
				title: 'Version',
				description: 'Scripts are always versioned.',
				icon: History,
				caption: 'Scripts are always versioned.',
				imageSrc: '/images/error-handler.png'
			}
		]
	},
	{
		label: 'Secrets & State',
		icon: Key,
		id: 'secrets-permissions',
		data: [
			{
				title: 'Secret management',
				description:
					'Credentials and sensitive values are tightly permissioned and stored securely as secrets.',
				icon: Key,
				caption:
					'Credentials and sensitive values are tightly permissioned and stored securely as secrets.',
				imageSrc: '/images/script-secret.png'
			},
			{
				title: 'Permissions',
				description: 'Granular permisioning through the use of folders.',
				icon: FileLock2,
				caption: 'Granular permisioning through the use of folders.',
				imageSrc: '/images/script-permissions.png'
			}
		]
	},
	{
		label: 'Multiple Triggers',
		icon: Play,
		id: 'schedules-webhooks-ui-cli',
		data: [
			{
				title: 'Schedules',
				description:
					'Windmill allows you to define schedules for Scripts and Flows. Once a schedule is defined, it will automatically run the script at the set frequency.',
				icon: CalendarClock,
				caption:
					'Windmill allows you to define schedules for Scripts and Flows. Once a schedule is defined, it will automatically run the script at the set frequency.',
				imageSrc: '/images/script-schedule.png'
			},

			{
				title: 'UI',
				description: 'You can directly trigger a script using the autogenerated UI.',
				icon: FormInput,
				caption: 'You can directly trigger a script using the autogenerated UI.',
				imageSrc: '/images/script-ui.png'
			},
			{
				title: 'Webhooks',
				description: 'You can trigger a script using a webhook.',
				icon: WebhookIcon,
				caption: 'You can trigger a script using a webhook.',
				imageSrc: '/images/script-webhook.png'
			},
			{
				title: 'CLI',
				description: 'Execute a script using the CLI.',
				icon: Terminal,
				caption: 'Execute a script using the CLI.',
				imageSrc: '/images/setup.gif'
			}
		]
	}
];

const examples = [
	{
		name: <span>Slack messaging</span>,
		description: (
			<>
				Send message to a specific channel on{' '}
				<a
					href="https://hub.windmill.dev/integrations/slack"
					target="_blank"
					className="!no-underline"
				>
					<mark className="leading-none bg-pink-100 hover:bg-pink-200 px-2 rounded whitespace-nowrap  text-[#611f69] font-semibold">
						Slack
					</mark>
				</a>
			</>
		),
		href: 'https://hub.windmill.dev/scripts/slack/1284/send-message-to-channel-slack'
	},
	{
		name: 'Generate image using OpenAI',
		description: (
			<>
				Given a prompt, generate an image using{' '}
				<a
					href="https://hub.windmill.dev/integrations/slack"
					target="_blank"
					className="!no-underline"
				>
					<mark className="leading-none bg-purple-100 hover:bg-purple-200 px-2 rounded whitespace-nowrap  text-purple-800 font-semibold">
						OpenAI
					</mark>
				</a>
			</>
		),
		href: 'https://hub.windmill.dev/scripts/openai/1451/generate-image-openai'
	},
	{
		name: 'Search documents in MongoDB',
		description: (
			<>
				Selects documents in a{' '}
				<a
					href="https://hub.windmill.dev/integrations/mongodb"
					target="_blank"
					className="!no-underline"
				>
					<mark className="leading-none bg-green-100 hover:bg-green-200 px-2 rounded whitespace-nowrap  text-green-800 font-semibold">
						MongoDB
					</mark>
				</a>{' '}
				collection or view and returns a cursor to the selected documents
			</>
		),
		href: 'https://hub.windmill.dev/scripts/mongodb/839/search-documents-mongodb'
	}
];

export default function ScriptSection() {
	return (
		<LandingSection bgClass="bg-gradient-to-br from-white to-blue-50">
			<div className="flex flex-col w-full gap-4 justify-center" id="script-section">
				<div className="flex flex-col gap-2">
					<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
						Scripts
					</h1>
					<h2 className="text-gray-600 text-2xl font-semibold">
						No overhead, scalable, self-hostable FaaS
					</h2>
				</div>

				<span className="text-lg text-gray-600 max-w-3xl">
					Develop and maintain scripts from our feature-complete web editor or use your own IDE and
					deploy from Github. Upskill your less technical teammates. It's easier to learn writing
					useful scripts with Windmill.
				</span>

				<FeatureCardTabs tabs={newTabs} color="blue" />
				<SectionExamples examples={examples} />
				<div className="flex">
					<a
						type="button"
						href="https://hub.windmill.dev/"
						target="_blank"
						className="inline-flex items-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 !no-underline hover:text-white"
					>
						Explore more scripts on the Hub
						<ExternalLink className="ml-2 h-5" />
					</a>
				</div>
			</div>
		</LandingSection>
	);
}
