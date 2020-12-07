import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			sidebarNav: string;
			txtCol_header: string;
			txtRow_extend: string;
			backgroundScreens: string;
			btn_screens: string;
			info: string;
			warning: string;
			success: string;
			trash: string;
		};
		fonts: {
			family: {
				openSans: string;
				charmonman: string;
				awesome: string;
			};
			size: {
				base: string;
			};
		};
	}
}
