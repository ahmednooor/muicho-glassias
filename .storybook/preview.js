import React from "react";
import { ThemeProvider } from "../src/components/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    brandImage: "https://place-hold.it/350x150",
  },
};

export const decorators = [
  (Story) => {
    const [bgUrls, _] = React.useState([
      "https://images.unsplash.com/photo-1647269701238-a4fe37d655ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80",
      "https://images.unsplash.com/photo-1646848223220-a35f50084231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1624114465099-1b44905105e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80",
      "https://images.unsplash.com/photo-1646910862835-f7494eccdc7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
      "https://images.unsplash.com/photo-1647003613495-b5f9a858365b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1646538230367-ad94dbb809a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
      "https://images.unsplash.com/photo-1641730710827-a3305f63c6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1647083701183-6f66d6b48174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",

      "https://images.unsplash.com/photo-1589989174964-f032c8ce2a02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1594886865203-7b153b1a0c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1647043304470-9660b56029f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
    ]);
    const [index, setIndex] = React.useState(0);

    return (
      <div
        style={{
          backgroundImage: `url("${bgUrls[index]}")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          padding: "48px 24px",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <button
            style={{
              outline: "none",
              border: "none",
              background: "#333",
              color: "#ddd",
              padding: "4px 8px",
              fontSize: "10px",
              fontFamily: "monospace",
              cursor: "pointer",
              // borderRadius: "0 0 4px 4px"
            }}
            onClick={(e) =>
              setIndex((index) => (index > 0 ? index - 1 : bgUrls.length - 1))
            }
          >
            &lt;
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "#333",
              color: "#ddd",
              padding: "4px 8px",
              fontSize: "10px",
              fontFamily: "monospace",
              cursor: "pointer",
              // borderRadius: "0 0 4px 4px"
            }}
            onClick={(e) =>
              setIndex((index) => (index < bgUrls.length - 1 ? index + 1 : 0))
            }
          >
            &gt;
          </button>
        </div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    );
  },
];
