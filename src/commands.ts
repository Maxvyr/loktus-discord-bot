import { Command } from "./command";
import { BlogPost } from "./commands/blog_post";
import { Games } from "./commands/games";
import { Hello } from "./commands/hello";
import { Test } from "./commands/test";

export const Commands: Command[] = [Hello, Games, Test, BlogPost];
