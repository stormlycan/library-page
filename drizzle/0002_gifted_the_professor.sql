ALTER TABLE "books" ALTER COLUMN "title" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "author" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "genre" text NOT NULL;