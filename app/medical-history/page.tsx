import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MedicalHistory() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Medical History</h1>

      <Tabs defaultValue="conditions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="procedures">Procedures</TabsTrigger>
          <TabsTrigger value="allergies">Allergies</TabsTrigger>
          <TabsTrigger value="immunizations">Immunizations</TabsTrigger>
        </TabsList>

        <TabsContent value="conditions" className="space-y-4">
          {[
            {
              condition: "Hypertension",
              diagnosed: "2020",
              status: "Ongoing",
              notes: "Well controlled with medication",
            },
            {
              condition: "Type 2 Diabetes",
              diagnosed: "2019",
              status: "Ongoing",
              notes: "Managing through diet and medication",
            },
          ].map((item, i) => (
            <Card key={i} className="p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">{item.condition}</p>
                  <p className="text-sm text-muted-foreground">Condition</p>
                </div>
                <div>
                  <p className="font-medium">{item.diagnosed}</p>
                  <p className="text-sm text-muted-foreground">Diagnosed</p>
                </div>
                <div>
                  <p className="font-medium">{item.status}</p>
                  <p className="text-sm text-muted-foreground">Status</p>
                </div>
                <div>
                  <p className="font-medium">{item.notes}</p>
                  <p className="text-sm text-muted-foreground">Notes</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="procedures" className="space-y-4">
          {[
            {
              procedure: "Appendectomy",
              date: "2018",
              hospital: "City General Hospital",
              surgeon: "Dr. Williams",
            },
            {
              procedure: "Knee Arthroscopy",
              date: "2021",
              hospital: "Sports Medicine Center",
              surgeon: "Dr. Thompson",
            },
          ].map((item, i) => (
            <Card key={i} className="p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">{item.procedure}</p>
                  <p className="text-sm text-muted-foreground">Procedure</p>
                </div>
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-sm text-muted-foreground">Date</p>
                </div>
                <div>
                  <p className="font-medium">{item.hospital}</p>
                  <p className="text-sm text-muted-foreground">Hospital</p>
                </div>
                <div>
                  <p className="font-medium">{item.surgeon}</p>
                  <p className="text-sm text-muted-foreground">Surgeon</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="allergies" className="space-y-4">
          {[
            {
              allergen: "Penicillin",
              severity: "Severe",
              reaction: "Anaphylaxis",
              diagnosed: "2015",
            },
            {
              allergen: "Latex",
              severity: "Moderate",
              reaction: "Skin rash",
              diagnosed: "2017",
            },
          ].map((item, i) => (
            <Card key={i} className="p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">{item.allergen}</p>
                  <p className="text-sm text-muted-foreground">Allergen</p>
                </div>
                <div>
                  <p className="font-medium">{item.severity}</p>
                  <p className="text-sm text-muted-foreground">Severity</p>
                </div>
                <div>
                  <p className="font-medium">{item.reaction}</p>
                  <p className="text-sm text-muted-foreground">Reaction</p>
                </div>
                <div>
                  <p className="font-medium">{item.diagnosed}</p>
                  <p className="text-sm text-muted-foreground">Diagnosed</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="immunizations" className="space-y-4">
          {[
            {
              vaccine: "Influenza",
              date: "2024",
              provider: "Dr. Martinez",
              nextDue: "2025",
            },
            {
              vaccine: "COVID-19",
              date: "2023",
              provider: "City Clinic",
              nextDue: "2024",
            },
          ].map((item, i) => (
            <Card key={i} className="p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">{item.vaccine}</p>
                  <p className="text-sm text-muted-foreground">Vaccine</p>
                </div>
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-sm text-muted-foreground">Date</p>
                </div>
                <div>
                  <p className="font-medium">{item.provider}</p>
                  <p className="text-sm text-muted-foreground">Provider</p>
                </div>
                <div>
                  <p className="font-medium">{item.nextDue}</p>
                  <p className="text-sm text-muted-foreground">Next Due</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}