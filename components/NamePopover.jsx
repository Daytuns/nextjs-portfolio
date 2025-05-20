import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";


export default function NamePopover() {
  return (
    <Popover placement="top" showArrow={true}>
      <PopoverTrigger>
        <Button className='text-2xl font-bold rounded-xl px-0'>Dayton Baldizón</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
            <img className="w-32 h-32 object-cover rounded-xl"src="/PortfolioPic.jpeg" />
        </div>
      </PopoverContent>
    </Popover>
  );
}

