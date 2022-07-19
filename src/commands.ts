import { Command } from "./command";
import { Games } from "./commands/games";
import { Hello } from "./commands/hello";
import { ScheduleMessage } from "./commands/schedule_message";
import { Test } from "./commands/test";

export const Commands: Command[] = [Hello, Games, Test, ScheduleMessage];