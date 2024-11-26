import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SupportTab = () => {
  const { toast } = useToast();

  const handleResolve = (id: number) => {
    toast({
      title: "Ticket Resolved",
      description: `Support ticket #${id} has been marked as resolved.`,
    });
  };

  const mockTickets = [
    { id: 1, user: "john@example.com", subject: "Payment Issue", status: "open", date: "2024-02-20" },
    { id: 2, user: "jane@example.com", subject: "Download Problem", status: "closed", date: "2024-02-19" },
  ];

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Support Tickets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-yellow-500/20">
              <TableHead className="text-yellow-500">ID</TableHead>
              <TableHead className="text-yellow-500">User</TableHead>
              <TableHead className="text-yellow-500">Subject</TableHead>
              <TableHead className="text-yellow-500">Status</TableHead>
              <TableHead className="text-yellow-500">Date</TableHead>
              <TableHead className="text-yellow-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTickets.map((ticket) => (
              <TableRow key={ticket.id} className="border-yellow-500/20">
                <TableCell>#{ticket.id}</TableCell>
                <TableCell>{ticket.user}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <Badge variant={ticket.status === 'open' ? 'default' : 'secondary'}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                      onClick={() => handleResolve(ticket.id)}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SupportTab;