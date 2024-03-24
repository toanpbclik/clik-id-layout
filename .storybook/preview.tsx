import React from "react";
import type { Preview } from "@storybook/react";
import {
	Title,
	Subtitle,
	Description,
	Primary,
	Controls,
	Stories,
} from "@storybook/blocks";

import "antd/dist/reset.css";
import "../src/resources/icon-config.css";
import "../src/resources/icon.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Controls />
					<Stories includePrimary={false} />
				</>
			),
		},
	},
};

export default preview;
