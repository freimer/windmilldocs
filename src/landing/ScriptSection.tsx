import React from 'react';
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
	FormInputIcon,
	FileCode,
	FileLock2,
	Lock,
	Box,
	Gitlab
} from 'lucide-react';
import { SiGnubash, SiGo, SiPython, SiDeno, SiVisualstudiocode } from 'react-icons/si/index';
import { useDeveloperMode } from '../pages';

import Section from './Section';

const cards = [
	{
		title: 'VSCode extension or any IDEs',
		subtitle:
			'Develop scripts locally with your favorite code editor, preview them locally and deploy them with the CLI. VSCode extension available',
		Icon: SiVisualstudiocode,
		gridArea: 'md:col-span-2 md:row-span-3',
		href: '/docs/advanced/local_development'
	},
	{
		title: 'Version control from Github/Gitlab',
		subtitle: 'Deploy scripts from Github or Gitlab',
		Icon: Github,
		gridArea: 'md:col-span-2 md:row-span-3',
		href: '/docs/advanced/deploy_gh_gl',
		icons: [Gitlab]
	},
	{
		title: 'CLI',
		subtitle: 'Trigger, sync and monitor scripts from CLI',
		Icon: Terminal,
		gridArea: 'md:col-span-1 md:row-span-3',
		href: '/docs/advanced/cli'
	},
	{
		title: 'Lockfile',
		subtitle: 'A lockfile is generated to ensure reproducibility',
		Icon: Box,
		gridArea: 'md:col-span-1 md:row-span-3',
		href: '/docs/advanced/imports'
	},
	{
		title: 'Immutable script versions',
		subtitle: 'Every deployed script has a unique and permanent hash.',
		Icon: Lock,
		gridArea: 'md:col-span-1 md:row-span-3',
		href: '/docs/script_editor/versioning#script-hashes'
	},
	{
		title: 'Instant preview and execution',
		subtitle: 'Preview and execute scripts instantly from the editor',
		Icon: Play,
		gridArea: 'md:col-span-1 md:row-span-3',
		href: '/docs/advanced/local_development'
	}
];

const tabs = [
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
				svg: '/images/typescript-code.svg',
				altText: 'Write scripts in Typescript'
			},
			{
				title: 'Python',
				description: '',
				icon: SiPython,
				caption: 'Python 3.11 environment.',
				svg: '/images/python-code.svg',
				altText: 'Write scripts in Python'
			},
			{
				title: 'Go',
				icon: SiGo,
				caption: '',
				svg: '/images/go-code.svg',
				altText: 'Write scripts in Go'
			},
			{
				title: 'Bash',
				icon: SiGnubash,
				caption: '',
				svg: '/images/bash-code.svg',
				altText: 'Write scripts in Bash'
			},
			{
				title: 'PostgreSQL / MySQL',
				icon: Database,
				caption: '',

				svg: '/images/sql-code.svg',
				altText: 'Write scripts in PostgreSQL / MySQL'
			}
		]
	},
	{
		label: 'Autogenerated UI & Dependencies',
		icon: FormInputIcon,
		id: 'autogenerated-ui',
		data: [
			{
				title: 'Autogenerated UI',
				description:
					"Share your app with non-technical users without spending time building the UI. It's automatically generated from script parameters, and customizable.",
				icon: FormInputIcon,
				caption:
					'Adding a new parameter to your script will automatically add a new field to the UI.',
				video: {
					videoSrc: '/videos/autogenerated-ui.mp4',
					videoLength: '26',
					altText: 'Autogenerated UI'
				}
			},
			{
				title: 'Automatic Dependency Management',
				description:
					'Windmill automatically infers your dependencies and generate lockfiles to guarantee reproducible execution. Dependencies are cached for instant executions.',
				icon: FormInputIcon,
				svg: '/images/script-dependency.svg',
				height: '600px',
				caption: 'Infer dependencies from your imports'
			}
		]
	},
	{
		label: 'Web IDE',
		icon: FileCode,
		id: 'web-ide-github-sync',
		data: [
			{
				title: 'Web IDE',
				description: 'LSP support for Typescript, Python, Go and Bash scripts.',
				icon: FileCode,
				imageSrc: '/images/web-ide.png',
				altText: 'Web IDE'
			}
		]
	},
	{
		label: 'Secrets & Permissions',
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
				imageSrc: '/images/script-secret.png',
				altText: 'Secret management'
			},
			{
				title: 'Permissions',
				description: 'Granular permisioning through the use of folders.',
				icon: FileLock2,
				caption: 'Granular permisioning through the use of folders.',
				imageSrc: '/images/script-permissions.png',
				altText: 'Permissions'
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
				imageSrc: '/images/script-schedule.png',
				altText: 'Schedules'
			},

			{
				title: 'UI',
				description: 'You can directly trigger a script using the autogenerated UI.',
				icon: FormInput,
				caption: 'You can directly trigger a script using the autogenerated UI.',
				imageSrc: '/images/script-ui.png',
				altText: 'Trigger autogeneated UI'
			},
			{
				title: 'Webhooks',
				description: 'You can trigger a script using a webhook.',
				icon: WebhookIcon,
				caption:
					'Every script has a sync and async webhook generated for every version of the script.',
				imageSrc: '/images/script-webhook.png',
				altText: 'Webhooks'
			},
			{
				title: 'CLI',
				description: 'Execute a script using the CLI.',
				icon: Terminal,
				caption: 'Execute a script using the CLI.',
				imageSrc: '/images/setup.gif',
				altText: 'Execute using CLI'
			},
			{
				title: 'Slack',
				description: 'Run scripts from a slack command.',
				icon: Terminal,
				caption: 'Trigger scripts from commands and approve flows directly from slack.',
				imageSrc: '/images/slack-trigger.png'
			}
		]
	}
];

declare global {
	interface Window {
		plausible: (name: string) => void;
	}
}

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
	const { developerMode } = useDeveloperMode();

	return (
		<Section
			title="Scripts"
			caption={
				!developerMode
					? 'Code to production in minutes'
					: 'No overhead, scalable, self-hostable FaaS'
			}
			cards={cards}
			tabs={tabs}
			description={
				'Run long-running heavy background jobs, script with complex dependencies, endpoints with high rpm or simple one-off tasks without any overhead. Trigger them from a webhook or the auto-generated UI and monitor them easily.'
			}
			color="blue"
			key="script-card"
			examples={examples}
			kind="script"
		/>
	);
}
