import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { SIGN_ITEMS } from "@/lib/tegn/signData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TegnXPBar } from "@/components/tegn/TegnXPBar";
import { useTegnXP } from "@/contexts/TegnXPContext";
import { Camera, Hand } from "lucide-react";
import { WebcamPreview } from "@/components/tegn/WebcamPreview";

const SignLearnPage = () => {
  const { tCommon } = useTranslation();
  const sample = SIGN_ITEMS.slice(0, 12);
  const { addXP } = useTegnXP();
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = sample[index % sample.length];

  const handleNext = () => {
    addXP(5);
    setIndex(prev => prev + 1);
    setShowAnswer(false);
  };

  return (
    <section className="space-y-6">
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardContent className="p-6 space-y-2">
          <h2 className="text-xl font-semibold">{String(tCommon('tegn.learn'))}</h2>
          <p className="text-sm text-muted-foreground">{String(tCommon('tegn.learnDesc'))}</p>
        </CardContent>
      </Card>

      <TegnXPBar />

      <Card className="glass-card border border-primary/10">
        <CardContent className="p-6 space-y-4">
          <div className="text-sm text-muted-foreground">{index + 1}/{sample.length}</div>
          <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Hand className="h-5 w-5" /> Vis dette tegnet: <span className="text-primary">{current.word}</span>
          </h3>
          <div className="flex flex-col items-center gap-4">
            <img src={current.imageUrl} alt={current.alt} className="w-64 h-64 object-contain" />
            {showAnswer && (
              <div className="text-lg text-foreground">{current.word}</div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setShowAnswer(s => !s)} aria-label={showAnswer ? 'Skjul fasit' : 'Vis fasit'}>
              {showAnswer ? 'Skjul fasit' : 'Vis fasit'}
            </Button>
            <Button onClick={handleNext} aria-label="Neste tegn">👍 Jeg gjorde det!</Button>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <Camera className="h-4 w-4" /> Kameraveiledning kommer – øv selv foreløpig
            </div>
            <WebcamPreview active={false} className="max-w-md" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignLearnPage;


