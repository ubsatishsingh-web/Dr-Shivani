import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatbotKnowledgeBase } from "../data/chatbotKnowledgeBase";

interface Message {
  role: "user" | "bot";
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! Welcome to SHMIK 24x7 DENTAL CLINIC in Lucknow. I'm Dr. Shivani's virtual dental assistant. How can I brighten your smile today? Please feel free to ask me any question, or select one of our quick options below!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSuggestionClick = (selectedEntry: typeof chatbotKnowledgeBase[0]) => {
    if (isLoading) return;
    
    // Add user question message
    setMessages((prev) => [...prev, { role: "user", text: `I want to ask about ${selectedEntry.topic}. ${selectedEntry.question}` }]);
    setIsLoading(true);
    
    // Simulate natural thinking delay for premium feel before outputting the precise grounded expert answer
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: selectedEntry.answer }]);
      setIsLoading(false);
    }, 700);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      const botResponse = data.text || "I'm sorry, I couldn't process that. Please try calling the clinic.";
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "I'm having a bit of trouble connecting right now. Please call us at +91 92367 37372 for immediate assistance." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-85 md:w-96 glass-panel overflow-hidden flex flex-col shadow-2xl"
            style={{ height: "min(500px, calc(100vh - 120px))" }}
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">SHMIK 24x7 Dental Help</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
            >
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-none shadow-md"
                        : "bg-white/60 text-foreground border border-white/40 rounded-tl-none shadow-sm backdrop-blur-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/60 p-3 rounded-2xl rounded-tl-none border border-white/40 shadow-sm flex items-center gap-2 backdrop-blur-sm">
                      <Loader2 size={16} className="animate-spin text-primary" />
                      <span className="text-xs text-muted-foreground font-bold tracking-tight">Thinking...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Suggestions Carousel */}
            <div className="px-4 py-2 border-t bg-white/20 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
              {chatbotKnowledgeBase.map((item) => (
                <button
                  key={item.category}
                  onClick={() => handleSuggestionClick(item)}
                  disabled={isLoading}
                  className="px-3 py-1 bg-white/80 hover:bg-primary hover:text-white rounded-full text-[11px] font-semibold text-primary/80 border border-primary/10 shadow-sm transition-all cursor-pointer flex-shrink-0 disabled:opacity-50"
                >
                  {item.topic}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white/40">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask a question..."
                  className="bg-white/80 border-none shadow-inner h-11"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-primary hover:bg-primary/90 h-11 w-11 p-0 rounded-xl"
                >
                  <Send size={18} />
                </Button>
              </div>
              <p className="text-[9px] text-center mt-3 text-muted-foreground font-semibold opacity-80">
                AI answers can be general guidelines. For midnight emergencies or extreme pain, please directly call +91 92367 37372.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
