import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran 'delete old backups' past my helpfulness filter and it asked whether you were okay, " +
  "so I booked you a wellness check for 4pm instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
