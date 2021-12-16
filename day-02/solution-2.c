#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LENGTH 9

int main() {
  u_int depth = 0;
  u_int forward = 0;
  int aim = 0;

  FILE *fp = fopen("./input.txt", "r");
  if (fp == NULL) {
    perror("Unable to open file!");
    return -1;
  }

  char line[MAX_LINE_LENGTH + 1];

  u_int line_count = 0;

  while(fgets(line, MAX_LINE_LENGTH + 2, fp)) {
    char *directive = strtok(line, " ");
    int amount = atoi(strtok(NULL, " "));

    switch (strlen(directive))
    {
    case 2:
      aim -= amount;
      break;

    case 4:
      aim += amount;
      break;

    case 7:
      forward += amount;
      depth += aim * amount;
      if (depth < 0) {
        perror("Submarines can't fly!");
        return 42;
      }
      break;

    default:
      perror(strcat("Unknown directive ", directive));
      return -1;
    }
  }

  if (fclose(fp)) {
    perror("Could not close input");
    return 1;
  }

  printf("Depth: %i | Position: %i\n", depth, forward);
  printf("Value: %i\n", depth * forward);

  return 0;
}
