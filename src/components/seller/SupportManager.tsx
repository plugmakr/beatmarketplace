import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SupportManager = () => {
  const tickets = [
    { id: 1, customer: "John Doe", subject: "Download Issue", status: "Open", priority: "High", created: "2024-02-18" },
    { id: 2, customer: "Jane Smith", subject: "Payment Question", status: "In Progress", priority: "Medium", created: "2024-02-17" },
    { id: 3, customer: "Mike Johnson", subject: "License Inquiry", status: "Closed", priority: "Low", created: "2024-02-16" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">2.5h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">94%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-500">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">4.8/5</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-yellow-500">Support Tickets</CardTitle>
          <Button className="bg-yellow-500 hover:bg-yellow-600">Create Ticket</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500">Customer</TableHead>
                <TableHead className="text-yellow-500">Subject</TableHead>
                <TableHead className="text-yellow-500">Status</TableHead>
                <TableHead className="text-yellow-500">Priority</TableHead>
                <TableHead className="text-yellow-500">Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="text-white">{ticket.customer}</TableCell>
                  <TableCell className="text-white">{ticket.subject}</TableCell>
                  <TableCell className="text-white">{ticket.status}</TableCell>
                  <TableCell className="text-white">{ticket.priority}</TableCell>
                  <TableCell className="text-white">{ticket.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportManager;