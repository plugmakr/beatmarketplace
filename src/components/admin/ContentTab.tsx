import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLandingPageStore } from "@/store/landingPageStore";
import { useToast } from "@/components/ui/use-toast";
import SectionOrderControls from "./SectionOrderControls";

const ContentTab = () => {
  const { content, updateContent, updateSectionOrder } = useLandingPageStore();
  const { toast } = useToast();

  const handleSectionMove = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...content.sectionsOrder];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newOrder[index], newOrder[newIndex]] = [newOrder[newIndex], newOrder[index]];
    updateSectionOrder(newOrder);
  };

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <Card className="bg-black/60 border border-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-500">Landing Page Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Accordion type="single" collapsible className="space-y-4">
          {content.sectionsOrder.map((sectionKey, index) => {
            const section = content[sectionKey as keyof typeof content];
            if (!section) return null;

            return (
              <AccordionItem 
                key={sectionKey} 
                value={sectionKey} 
                className="border border-yellow-500/20 rounded-lg"
              >
                <div className="flex items-center justify-between px-4">
                  <AccordionTrigger className="text-yellow-500 text-xl">
                    {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)} Section
                  </AccordionTrigger>
                  <SectionOrderControls
                    sectionName={sectionKey}
                    index={index}
                    totalSections={content.sectionsOrder.length}
                    onMoveUp={() => handleSectionMove(index, 'up')}
                    onMoveDown={() => handleSectionMove(index, 'down')}
                  />
                </div>
                <AccordionContent className="space-y-4 p-4">
                  {'title' in section && (
                    <div>
                      <Label htmlFor={`${sectionKey}-title`} className="text-white">Title</Label>
                      <Input 
                        id={`${sectionKey}-title`}
                        value={section.title}
                        onChange={(e) => updateContent(sectionKey as any, { ...section, title: e.target.value })}
                        className="bg-black/60 text-white"
                      />
                    </div>
                  )}
                  {'description' in section && (
                    <div>
                      <Label htmlFor={`${sectionKey}-description`} className="text-white">Description</Label>
                      <Textarea 
                        id={`${sectionKey}-description`}
                        value={section.description}
                        onChange={(e) => updateContent(sectionKey as any, { ...section, description: e.target.value })}
                        className="bg-black/60 text-white"
                      />
                    </div>
                  )}
                  {'items' in section && Array.isArray(section.items) && (
                    <div className="space-y-2">
                      {section.items.map((item: any, itemIndex: number) => (
                        <div key={itemIndex}>
                          <Label htmlFor={`${sectionKey}-item-${itemIndex}`} className="text-white">
                            {typeof item === 'string' ? `Item ${itemIndex + 1}` : item.title}
                          </Label>
                          <Input 
                            id={`${sectionKey}-item-${itemIndex}`}
                            value={typeof item === 'string' ? item : item.title}
                            onChange={(e) => {
                              const newItems = [...section.items];
                              if (typeof item === 'string') {
                                newItems[itemIndex] = e.target.value;
                              } else {
                                newItems[itemIndex] = { ...item, title: e.target.value };
                              }
                              updateContent(sectionKey as any, { ...section, items: newItems });
                            }}
                            className="bg-black/60 text-white"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Button 
          onClick={handleSave}
          className="bg-yellow-500 hover:bg-yellow-400 text-black"
        >
          <Edit3 className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContentTab;