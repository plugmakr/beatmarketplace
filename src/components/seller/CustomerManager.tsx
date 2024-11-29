import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CustomerManager = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", purchases: 12, totalSpent: "$1,240", lastPurchase: "2024-02-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", purchases: 8, totalSpent: "$890", lastPurchase: "2024-02-10" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", purchases: 15, totalSpent: "$1,750", lastPurchase: "2024-02-18" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-yellow-500">Customer Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-yellow-500">Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl text-white">156</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-yellow-500">Active This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl text-white">43</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-yellow-500">Lifetime Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl text-white">$15,780</p>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-yellow-500">Name</TableHead>
                <TableHead className="text-yellow-500">Email</TableHead>
                <TableHead className="text-yellow-500">Purchases</TableHead>
                <TableHead className="text-yellow-500">Total Spent</TableHead>
                <TableHead className="text-yellow-500">Last Purchase</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="text-white">{customer.name}</TableCell>
                  <TableCell className="text-white">{customer.email}</TableCell>
                  <TableCell className="text-white">{customer.purchases}</TableCell>
                  <TableCell className="text-white">{customer.totalSpent}</TableCell>
                  <TableCell className="text-white">{customer.lastPurchase}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerManager;