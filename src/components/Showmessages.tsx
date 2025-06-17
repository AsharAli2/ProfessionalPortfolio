"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp?: { seconds: number; nanoseconds: number };
}

export default function ShowMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, "messages");
        const q = query(messagesRef, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gold-400">
        Messages Received
      </h2>

      <ScrollArea className="h-[600px] w-full rounded-md border border-gold-500/20 p-4 bg-black/30">
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-24 w-full rounded-md bg-black/40"
              />
            ))}
          </div>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-400">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <Card
              key={msg.id}
              className="mb-4 bg-black/50 border border-gold-500/20"
            >
              <CardHeader>
                <CardTitle className="text-gold-400">
                  {msg.name}{" "}
                  <span className="text-sm text-gray-400">({msg.email})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{msg.message}</p>
                {msg.timestamp && (
                  <p className="text-xs text-gold-500 mt-2">
                    {new Date(msg.timestamp.seconds * 1000).toLocaleString()}
                  </p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </ScrollArea>
    </section>
  );
}
