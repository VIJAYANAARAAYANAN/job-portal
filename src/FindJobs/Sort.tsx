import { useState } from 'react';
import { Combobox, useCombobox} from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance' ,'Most Recent','Salary (Low - High)' ,'Salary -(High - Low)'];

const  Sort = () =>{
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className="text-xl" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
      
      <Combobox
        store={combobox}
        width={170}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={() => combobox.toggleDropdown()} className='border-2 border-white flex px-2 py-1 text-sm rounded-xl items-center gap-2 cursor-pointer'>
            {selectedItem} <IconAdjustments className="h-7 w-6"color="#275DF5"stroke={1.75} />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown >
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
  );
}
export default Sort;