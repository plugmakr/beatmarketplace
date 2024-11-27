import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DollarSign, Download } from "lucide-react";

const BillingManagementTab = () => {
  const billingData = [
    {
      id: "1",
      customer: "John Doe",
      amount: 299.99,
      status: "Paid",
      date: "2024-02-20",
      type: "Subscription"
    },
    {
      id: "2",
      customer: "Jane Smith",
      amount: 499.99,
      status: "Pending",
      date: "2024-02-19",
      type: "One-time"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-black/60 border border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-yellow-500 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Billing Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingData.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell>{bill.customer}</TableCell>
                  <TableCell>${bill.amount}</TableCell>
                  <TableCell>{bill.status}</TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>{bill.type}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="text-yellow-500 border-yellow-500">
                      <Download className="w-4 h-4 mr-2" />
                      Invoice
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingManagementTab;