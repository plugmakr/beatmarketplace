import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BarChart, Download, DollarSign } from "lucide-react";

const SalesManager = () => {
  const salesData = [
    {
      id: "1",
      product: "Summer Vibes Beat",
      price: 29.99,
      buyer: "John Producer",
      date: "2024-02-20",
      status: "Completed"
    },
    {
      id: "2",
      product: "Urban Flow Kit",
      price: 49.99,
      buyer: "Studio Master",
      date: "2024-02-19",
      status: "Processing"
    }
  ];

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <BarChart className="w-4 h-4" />
          Sales Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-black/40 border border-yellow-500/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">$1,234</p>
                <p className="text-gray-200">Total Sales</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-yellow-500">Product</TableHead>
              <TableHead className="text-yellow-500">Price</TableHead>
              <TableHead className="text-yellow-500">Buyer</TableHead>
              <TableHead className="text-yellow-500">Date</TableHead>
              <TableHead className="text-yellow-500">Status</TableHead>
              <TableHead className="text-yellow-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell className="text-white">{sale.product}</TableCell>
                <TableCell className="text-white">${sale.price}</TableCell>
                <TableCell className="text-white">{sale.buyer}</TableCell>
                <TableCell className="text-white">{sale.date}</TableCell>
                <TableCell className="text-white">{sale.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-yellow-500 border-yellow-500">
                    <Download className="w-4 h-4 mr-2" />
                    Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SalesManager;