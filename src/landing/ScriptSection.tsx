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
import { ExternalLink } from 'lucide-react';
import FeatureCardTabs from './tabs/FeatureCardTabs';
import { SiGnubash, SiGo, SiPython, SiDeno } from 'react-icons/si/index';

const newTabs = [
	{
		label: 'Polyglot',
		icon: Code,
		id: 'script',
		data: [
			{
				title: 'Python',
				description: '',
				icon: SiPython,
				caption: 'Python 3.11 environment.',
				svg: '/images/python-code.svg'
			},
			{
				title: 'Typescript',
				description: '',
				icon: SiDeno,
				caption: 'Deno as the typescript runtime.',
				video: {
					videoSrc: '/videos/deno.mp4',
					videoLength: '33'
				}
			},
			{
				title: 'Go',
				icon: SiGo,
				caption: '',
				imageSrc: '/images/go.png'
			},
			{
				title: 'Bash',
				icon: SiGnubash,
				caption: '',
				imageSrc: '/images/bash.png'
			},
			{
				title: 'PostgreSQL / MySQL',
				icon: Database,
				caption: '',

				imageSrc: '/images/sql.png'
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
					'Share your app with non-technical users without spending time building the UI. It’s automatically generated from script parameters, and customizable',
				icon: FormInputIcon,
				caption:
					"Share your app with non-technical users without spending time building the UI. It's automatically generated from script parameters, and customizable",
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
				description: 'LSP support for Typescript, Python, Go and Bash scripts',
				icon: FileCode,
				caption: 'LSP: LSP support for Typescript, Python, Go and Bash scripts',
				imageSrc: '/images/error-handler.png'
			},
			{
				title: 'Github Sync',
				description: 'Scripts are always versioned',
				icon: Github,
				caption: 'Scripts are always versioned',
				imageSrc: '/images/error-handler.png'
			},
			{
				title: 'Version',
				description: 'Scripts are always versioned',
				icon: History,
				caption: 'Scripts are always versioned',
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
				description: 'Granular permisioning through the use of folders',
				icon: FileLock2,
				caption: 'Granular permisioning through the use of folders',
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
				icon: WebhookIcon,
				caption: 'You can trigger a script using a webhook.',
				imageSrc: '/images/script-webhook.png'
			},
			{
				title: 'CLI',
				icon: Terminal,
				caption: 'Execute a script using the CLI',
				imageSrc: '/images/setup.gif'
			}
		]
	}
];

export default function ScriptSection() {
	return (
		<LandingSection bgClass="bg-gradient-to-br from-white to-blue-50">
			<div className="flex flex-col w-full gap-4 justify-center">
				<div className="flex flex-col gap-2">
					<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
						Scripts
					</h1>
					<h2 className="text-gray-600 text-2xl font-semibold">
						No overhead, scalable, self-hostable FaaS
					</h2>
				</div>

				<span className="text-lg text-gray-600 max-w-3xl">
					Develop and maintain scripts from our feature-complete webeditor or use your own IDE and
					deploy from Github. Upskill your less technical teammates. It's easier to learn writing
					useful scripts with Windmill.
				</span>

				<FeatureCardTabs tabs={newTabs} color="blue" />

				<div className="flex">
					<a
						type="button"
						href="https://hub.windmill.dev/"
						target="_blank"
						className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 !no-underline hover:text-white"
					>
						Explore scripts on the Hub
						<ExternalLink className="ml-2 h-5" />
					</a>
				</div>
			</div>
		</LandingSection>
	);
}
