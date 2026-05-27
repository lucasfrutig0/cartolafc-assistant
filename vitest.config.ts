/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		// Vitest configuration options
		globals: true,
		environment: "jsdom",
		css: true,
		mockReset: true,
		restoreMocks: true,
		clearMocks: true,
	},
});
