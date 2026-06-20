import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Bhavya Singh",
    role: "Patient (Wisdom Tooth Extraction)",
    content: "I went to Dr Shivani to get my wisdom tooth extracted. She is extremely polite and professional. Very skilled. She made the procedure painless and very comfortable. I would highly recommend Shmik 24x7 to everyone. Best dental care in Lucknow.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Lakshmi Singh",
    role: "Patient (Zirconia Crown)",
    content: "Very good experience. My front teeth had issues and zirconia crowns were suggested by doctors. The work was so precise that even I can't differentiate between the real tooth and crown now. Thanks doc!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Shefali Joseph",
    role: "Patient (Root Canal Treatment)",
    content: "Dr Shivani is just awesome, very polite and caring. I had the best experience here. I was very scared but she calmed me down and explained the root canal treatment beautifully. I recommend her to everyone!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Sudhanshu",
    role: "Local Guide",
    content: "I consulted for my mother here. And I must say that compared to others who prescribe unnecessary procedures, Dr. Shivani provided the exact apt level of treatment focusing only on what was required.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Muskan Sharma",
    role: "Patient (RCT & Explanation)",
    content: "I got my RCT done by Dr. Shivani. The procedure was painless and she made time to explain the entire procedure to me via educational videos, which was extremely thoughtful and comforted me a lot. Best dentist in Lucknow!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Amit Deokar",
    role: "Patient (Toothache Care)",
    content: "I had a sudden toothache and visited Dr. Shivani Srivastava. Her team was incredibly welcoming, and the clinic was very clean and modern. Dr. Shivani took her time to thoroughly examine and explain my tooth carefully.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Pooja Singh",
    role: "Patient (First Extraction)",
    content: "It was my first extraction & the best experience at the dentist. Dr. Shivani is a professional and humble person who treats patients with humility. Also, her treatments are very pocket friendly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Kunwar Singh",
    role: "Patient (Dental Cosmetics)",
    content: "I got my dental jewellery done from Dr. Shivani. She is exceptionally good at dental cosmetics. I am very happy with the results—it is better than I expected. Thank you ma'am!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Tanishka Makeup artist",
    role: "Local Guide (Smile Designing)",
    content: "Best clinic for premium and painless dental treatment. Very impressed with how my smile transitioned. Highly recommend this clinic to everyone seeking quality cosmetic care.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=100"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote size={200} className="text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              What Our <span className="text-primary">Patients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-foreground/60"
            >
              We take pride in providing exceptional care. Read about the experiences of our community members.
            </motion.p>
          </div>
          
          <a
            href="https://share.google/Do7sPHr7lTaZTgL8c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-teal-50 w-full sm:w-auto"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=user${i}`} alt="user" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold text-primary">500+ Verified Reviews</p>
              <span className="text-[10px] text-muted-foreground font-semibold block underline">View on Google Maps ↗</span>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm glass-panel p-1 sm:p-2">
                <CardContent className="pt-6 px-4 pb-6 sm:pt-8 sm:px-6 sm:pb-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg mb-8 leading-relaxed font-medium text-foreground">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={review.image} alt={review.name} referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground font-semibold">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
