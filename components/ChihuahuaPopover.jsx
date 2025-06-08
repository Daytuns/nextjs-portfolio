import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";


export default function Chihuahua() {
  return (
    <Popover placement="top" showArrow={true}>
      <PopoverTrigger>
        <Button className='underline rounded-xl px-0 text-sm'>bark</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
            <img className="w-32 h-32 object-cover rounded-xl"src="/chihuahua.jpeg" />
        </div>
      </PopoverContent>
    </Popover>
  );
}

