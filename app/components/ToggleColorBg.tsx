import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card } from "@/components/ui/card";

const colors = [
  { name: 'Rouge', value: 'red', hex: '#FF0000' },
  { name: 'Bleu', value: 'blue', hex: '#0000FF' },
  { name: 'Vert', value: 'green', hex: '#00FF00' },
  { name: 'Jaune', value: 'yellow', hex: '#FFFF00' },
  { name: 'Orange', value: 'orange', hex: '#FFA500' },
  { name: 'Violet', value: 'purple', hex: '#8A2BE2' },
  { name: 'Rose', value: 'pink', hex: '#FF69B4' },
  { name: 'Turquoise', value: 'turquoise', hex: '#40E0D0' },
  { name: 'Lavande', value: 'lavender', hex: '#E6E6FA' },
  { name: 'Corail', value: 'coral', hex: '#FF7F50' },
  { name: 'Vert menthe', value: 'mint', hex: '#98FF98' },
  { name: 'Bleu ciel', value: 'skyblue', hex: '#87CEEB' },
  { name: 'Saumon', value: 'salmon', hex: '#FA8072' },
  { name: 'Indigo', value: 'indigo', hex: '#4B0082' },
  { name: 'Pêche', value: 'peach', hex: '#FFDAB9' },
];

export function ToggleColorBg() {
  return (
    <Card className="p-4">
      <ToggleGroup type="single" className="flex flex-wrap gap-2 justify-center">
        {colors.map((color) => (
          <ToggleGroupItem
            key={color.value}
            value={color.value}
            aria-label={`Toggle ${color.name}`}
            className="p-1"
          >
            <div
              style={{
                backgroundColor: color.hex,
                width: '2rem',
                height: '2rem',
                borderRadius: '0.25rem'
              }}
              title={color.name}
            />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </Card>
  )
}

