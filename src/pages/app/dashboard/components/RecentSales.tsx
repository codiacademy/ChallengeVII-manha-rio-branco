import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { CreateSaleForm } from "./CreateSaleForm";

interface Sale {
  id: number;
  name: string;
  email: string;
  amount: string;
}

export function RecentSales() {
  const [sales, setSales] = useState<Sale[]>([]);

  const fetchSales = async () => {
    try {
      const res = await fetch("http://localhost:3001/sales");
      const data = await res.json();
      setSales(data);
    } catch (error) {
      console.error("Erro ao buscar vendas:", error);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <Card className="bg-gray-800 border border-gray-700/30 w-full">
      <CardHeader>
        <CardTitle className="text-xl text-white">Vendas Recentes</CardTitle>
        <CardDescription className="text-sm text-gray-50">
          Você realizou {sales.length} vendas este mês.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1 space-y-6">
            {sales.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex md:flex-row flex-col md:items-center items-start justify-between gap-5"
                >
                  <Avatar className="w-10 h-10 bg-gray-400 flex items-center justify-center">
                    <User className="text-gray-800" />
                  </Avatar>

                  <div className="flex-1 flex flex-col gap-1">
                    <span className="font-medium text-gray-200">{item.name}</span>
                    <span className="text-sm text-gray-400">{item.email}</span>
                  </div>

                  <strong className="text-gray-400">{item.amount}</strong>
                </div>
              );
            })}
          </div>

          <div className="flex-1">
            <CreateSaleForm onNewSale={fetchSales} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
