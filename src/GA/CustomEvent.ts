import ReactGA from "react-ga4";

const CustomEvent = (action: string, category: string, label?: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label || undefined,
  });
};

export default CustomEvent;
