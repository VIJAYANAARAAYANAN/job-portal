import { IconBookmark, IconCalendar, IconHeart } from "@tabler/icons-react";
import { Text, Divider, Avatar, Button, Modal } from "@mantine/core";
import { IconClockHour3 } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className="bg-white p-4 w-80 font-[Poppins] flex flex-col gap-2 rounded-md">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#eaf1f5] rounded-full">
            <Avatar
              className="h-5 w-5"
              size="lg"
              src={`/${props.image}.png`}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-[#275DF5] font-semibold font-[Poppins]">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="cursor-pointer" stroke={2} color="#275DF5" />
      </div>

      <div className="pt-3 flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[#eaf1f5] [&>div]:rounded-lg [&>div]:text-xs [&>div]:text-nowrap font-[Poppins]  ">
        {props.topSkills?.map((skill: any, index: any) => {
          return <div key={index}>{skill}</div>;
        })}
      </div>

      <Text
        style={{ fontSize: 12, textAlign: "justify" }}
        className="text-xs text-justify "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider mr="xs" size="xs" color="#275DF5" />
      {props.invited ? (
        <div className="flex gap-1 text-[#275DF5] text-sm items-center my-1">
          <IconCalendar className="w-5 h-5" stroke={1.5} /> Interview: August
          27,2025 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="text-md font-semibold ">
            &#8377;{props.expectedCtc}
          </div>
          <div className="flex items-center gap-1 text-xs">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {props.location}
          </div>
        </div>
      )}

      <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button variant="outline" color="#275DF5" fullWidth>
                Profile
              </Button>
            </Link>
            <div className="flex items-center">
              {props.posted ? (
                <Button
                  onClick={open}
                  variant="light"
                  color="#275DF5"
                  fullWidth
                  rightSection={<IconCalendar className="w-5 h-5" stroke={2} />}
                >
                  Schedule
                </Button>
              ) : (
                <Button variant="light" color="#275DF5" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {props.invited && (
          <>
            <div>
              <Button variant="light" color="#275DF5" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button variant="outline" color="#275DF5" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            minDate={new Date()}
            onChange={setValue}
            label="Date"
            placeholder="Enter date"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button
            className="font-medium"
            variant="light"
            color="#275DF5"
            fullWidth
          >
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default TalentCard;
