"use client"; // Ensure this component is client-side
import { Card } from "@/components/ui/card"; // Adjust the import path according to your project structure
import { VitalsChart } from "@/components/charts/VitalsChart"; // Adjust the import path according to your project structure
import { useState } from "react"; // Import useState from React

const mockData = [
  { date: '2024-03-01', bp: '120/80', weight: 150, heartRate: 72 },
  { date: '2024-03-08', bp: '118/79', weight: 149, heartRate: 70 },
  { date: '2024-03-15', bp: '122/82', weight: 151, heartRate: 74 },
  { date: '2024-03-22', bp: '119/78', weight: 148, heartRate: 71 },
];

(function (d: Document, t: string) {
  const v = d.createElement(t) as HTMLScriptElement;
  const s = d.getElementsByTagName(t)[0];

  v.onload = () => {
    (window as any).voiceflow.chat.load({
      verify: { projectID: '676bef3d29a12f295afe2eb2' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
    });
  };

  v.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
  v.type = 'text/javascript';
  s.parentNode?.insertBefore(v, s);
})(document, 'script');


// Function to fetch advice from API
const fetchAdviceFromAPI = async (query) => {
  const response = await fetch(`/api/advice?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Assuming the API returns JSON
};

export default function Vitals() {
  const heartRateData = mockData.map(d => ({
    date: d.date,
    value: d.heartRate,
  }));

  const [userInput, setUserInput] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetchAdviceFromAPI(userInput);
      setResponses((prev) => [...prev, { user: userInput, ai: response.advice }]);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setResponses((prev) => [...prev, { user: userInput, ai: "Sorry, I couldn't fetch advice at this time." }]);
    } finally {
      setUserInput("");
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-slate-50  text-black h-screen">
      <h1 className="text-3xl font-bold mb-8">Vital Signs</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Heart Rate History</h2>
          <div className="h-[300px]">
            <VitalsChart 
              data={heartRateData}
              yAxisLabel="BPM"
              stroke="#8884d8"
            />
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Latest Readings</h2>
          <div className="space-y-4">
            {mockData.slice(0, 1).map((reading, i) => (
              <div key={i} className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Blood Pressure</p>
                  <p className="text-xl font-semibold">{reading.bp}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight (lbs)</p>
                  <p className="text-xl font-semibold">{reading.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Heart Rate</p>
                  <p className="text-xl font-semibold">{reading.heartRate}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* AI Chat Feature */}
      <Card className="p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Ask About Diseases</h2>
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about diabetes, heart attack, cough, or cancer..."
              className="border rounded-md p-2 mb-2 resize-none h-24"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600" disabled={loading}>
              {loading ? "Loading..." : "Get Advice"}
            </button>
          </form>
          <div className="space-y-2">
            {responses.map((response, index) => (
              <div key={index} className="border rounded-md p-4">
                <p className="font-medium">You: {response.user}</p>
                <p className="text-muted-foreground">AI: {response.ai}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}