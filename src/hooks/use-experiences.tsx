import { FC, ReactNode, createContext, useContext, useMemo } from "react";
import { Experience, Experiences } from "../models/Experience";

type ExperiencesContextType = Experiences;

const ExperiencesContext = createContext<ExperiencesContextType>([]);

export const ExperiencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = useMemo(() => {
        return [
            new Experience(
                "Software Engineer",
                "DeepStructure",
                [
                    "Joined as the 6th employee at a VC-backed tech startup in Silicon Valley, building a cutting-edge AI infrastructure platform.",
                    "Architected and built core components of our in-house implementation of OpenAI’s Assistants API, like streaming powered by NATS, retries with assertions, fallback models with concurrently racing requests, and robust rate-limiting using a TTL cache, complemented by a comprehensive smoke test suite setup in CI.",
                    "Rewrote the structured completions module in the SDK to add support for non-OpenAI LLM providers like Google, Anthropic, Sambanova, Groq, and Amazon Bedrock, while reorganizing the code to follow best practices inspired by open-source projects like Vercel’s AI SDK.",
                    "Worked on improving the performance and accuracy of structured completions in a customer-facing project by exploring various prompt engineering techniques, ultimately concluding that non-nested output schemas reduce LLM confusion and improve generation speeds.",
                    "Built several Slack bot reference apps on top of DeepStructure to dogfood platform capabilities, implemented dynamic self-improving responses leveraging user reactions, and a mechanism to refresh access tokens for deployed apps automatically.",
                    "Built an LLM evaluation React dashboard enabling side-by-side model comparisons using the “LLM as a Judge” approach; also implemented a concept of versioned Assistant families, allowing users to mark a favorite for consistent routing within each family.",
                ],
                "https://www.deepstructure.io/",
                [
                    {
                        name: "Typescript",
                    },
                    {
                        name: "Hono.js",
                    },
                    {
                        name: "Remix",
                    },
                    {
                        name: "Prompt Engineering",
                        websiteLink: "https://www.promptingguide.ai/",
                    },
                    {
                        name: "NATS",
                    },
                    {
                        name: "AWS",
                    },
                    {
                        name: "Slack Bolt",
                        websiteLink: "https://api.slack.com/bolt",
                    },
                ],
                "JUL 2024"
            ),
            new Experience(
                "Frontend Developer",
                "Ontario Treasury Board Secretariat",
                [
                    "Initiated as a co-op student and subsequently secured four consecutive contracts due to demonstrated reliability and high performance",
                    "Worked as an Angular developer within an Agile team on OnTrack, a large enterprise application integrating multiple legacy systems for the Cabinet Office and the Treasury Board",
                    "Implemented features requested by clients and fixed bugs that were raised closing more than 150 tasks to date",
                    "Played a key role in a major feature redesign, successfully implementing 26 User Stories within a single 2-week sprint",
                    "Set up static analysis tooling, including Prettier and ESLint, and configured pre-commit hooks in 16 production repositories.",
                ],
                "https://www.linkedin.com/company/ontreasury/mycompany/",
                [
                    {
                        name: "Angular",
                    },
                    {
                        name: "Azure Devops",
                    },
                    {
                        name: "Web Accessibility",
                        websiteLink: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    {
                        name: "Lightning Design System",
                        websiteLink: "https://www.lightningdesignsystem.com/",
                    },
                ],
                "SEPT 2022",
                "JUL 2024"
            ),
        ];
    }, []);

    return <ExperiencesContext.Provider value={value}>{children}</ExperiencesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExperiences = () => useContext(ExperiencesContext);
