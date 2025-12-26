import { CheckCircle, HelpCircle } from "lucide-react";

type TravelTipsProps = {
  tips?: string[];
};

export default function TravelTips({ tips }: TravelTipsProps) {
  return (
    <aside className="top-24 rounded-xl bg-blue-50 p-6 shadow-sm my-8">
      <div className="mb-4 flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-blue-900">
          Travel Tips
        </h3>
      </div>

      <ul className="space-y-3">
        {tips?.map((tip, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        <HelpCircle className="h-4 w-4" />
        Need Help? Contact Us
      </button>
    </aside>
  );
}
