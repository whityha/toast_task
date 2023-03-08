import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/theme/globalStyle";
import Theme from "../src/theme/theme";

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={Theme}>{
        <>
            {storyFn()}
            <GlobalStyle />
        </>
    }
    </ThemeProvider>
  );
addDecorator(ThemeDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
