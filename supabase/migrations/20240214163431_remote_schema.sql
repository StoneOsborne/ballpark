create table public.profile (
    id Serial Primary Key,
    updated_at timestamp with time zone,
    name text,
    email text
);

INSERT INTO profile(id, name, email)
VALUES ({'1','Stone', 'FAKE'});







-- alter table "public"."profile" enable row level security;



-- CREATE UNIQUE INDEX profile_pkey ON public.profile USING btree (id);



-- alter table "public"."profile" add constraint "profile_pkey" PRIMARY KEY using index "profile_pkey";


-- alter table "public"."profile" add constraint "profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

-- alter table "public"."profile" validate constraint "profile_id_fkey";



-- set check_function_bodies = off;

-- CREATE OR REPLACE FUNCTION public.handle_new_user()
--  RETURNS trigger
--  LANGUAGE plpgsql
--  SECURITY DEFINER
-- AS $function$
-- begin
--   insert into public.profile (id, name,)
--   values (new.id, new.raw_user_meta_data->>'name',);
--   return new;
-- end;
-- $function$
-- ;

-- grant delete on table "public"."profile" to "anon";

-- grant insert on table "public"."profile" to "anon";

-- grant references on table "public"."profile" to "anon";

-- grant select on table "public"."profile" to "anon";

-- grant trigger on table "public"."profile" to "anon";

-- grant truncate on table "public"."profile" to "anon";

-- grant update on table "public"."profile" to "anon";

-- grant delete on table "public"."profile" to "authenticated";

-- grant insert on table "public"."profile" to "authenticated";

-- grant references on table "public"."profile" to "authenticated";

-- grant select on table "public"."profile" to "authenticated";

-- grant trigger on table "public"."profile" to "authenticated";

-- grant truncate on table "public"."profile" to "authenticated";

-- grant update on table "public"."profile" to "authenticated";

-- grant delete on table "public"."profile" to "service_role";

-- grant insert on table "public"."profile" to "service_role";

-- grant references on table "public"."profile" to "service_role";

-- grant select on table "public"."profile" to "service_role";

-- grant trigger on table "public"."profile" to "service_role";

-- grant truncate on table "public"."profile" to "service_role";

-- grant update on table "public"."profile" to "service_role";

-- create policy "Enable delete for authenticated users only"
-- on "public"."profile"
-- as permissive
-- for delete
-- to public
-- using (true);


-- create policy "Enable read access for all users"
-- on "public"."profile"
-- as permissive
-- for delete
-- to public
-- using (true);


-- create policy "Public profile are viewable by everyone."
-- on "public"."profile"
-- as permissive
-- for select
-- to public
-- using (true);


-- create policy "Users can insert their own profile."
-- on "public"."profile"
-- as permissive
-- for insert
-- to public
-- with check ((auth.uid() = id));


-- create policy "Users can update own profile."
-- on "public"."profile"
-- as permissive
-- for update
-- to public
-- using ((auth.uid() = id));














-- create function public.add_new_user()
-- returns trigger as $$
-- begin
--   insert into public.profile (id, full_name, avatar_url)
--   values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
--   return new;
-- end;
-- $$ language plpgsql security definer;
-- create trigger handle_user_created
--   after insert on public.users
--   for each row execute procedure public.add_new_user();


















-- create table "public"."profile" (
--     "id" uuid not null,
--     "updated_at" timestamp with time zone,
--     "username" text,
--     "full_name" text,
--     "avatar_url" text,
--     "website" text
-- );


-- alter table "public"."profile" enable row level security;

-- create table "public"."smoothies" (
--     "id" bigint generated by default as identity not null,
--     "created_at" timestamp with time zone not null default now(),
--     "name" text,
--     "description" text,
--     "video" text
-- );


-- alter table "public"."smoothies" enable row level security;

-- CREATE UNIQUE INDEX profile_pkey ON public.profile USING btree (id);

-- CREATE UNIQUE INDEX profile_username_key ON public.profile USING btree (username);

-- CREATE UNIQUE INDEX smoothies_pkey ON public.smoothies USING btree (id);

-- alter table "public"."profile" add constraint "profile_pkey" PRIMARY KEY using index "profile_pkey";

-- alter table "public"."smoothies" add constraint "smoothies_pkey" PRIMARY KEY using index "smoothies_pkey";

-- alter table "public"."profile" add constraint "profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

-- alter table "public"."profile" validate constraint "profile_id_fkey";

-- alter table "public"."profile" add constraint "profile_username_key" UNIQUE using index "profile_username_key";

-- alter table "public"."profile" add constraint "username_length" CHECK ((char_length(username) >= 3)) not valid;

-- alter table "public"."profile" validate constraint "username_length";

-- set check_function_bodies = off;

-- CREATE OR REPLACE FUNCTION public.handle_new_user()
--  RETURNS trigger
--  LANGUAGE plpgsql
--  SECURITY DEFINER
-- AS $function$
-- begin
--   insert into public.profile (id, full_name, avatar_url)
--   values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
--   return new;
-- end;
-- $function$
-- ;

-- grant delete on table "public"."profile" to "anon";

-- grant insert on table "public"."profile" to "anon";

-- grant references on table "public"."profile" to "anon";

-- grant select on table "public"."profile" to "anon";

-- grant trigger on table "public"."profile" to "anon";

-- grant truncate on table "public"."profile" to "anon";

-- grant update on table "public"."profile" to "anon";

-- grant delete on table "public"."profile" to "authenticated";

-- grant insert on table "public"."profile" to "authenticated";

-- grant references on table "public"."profile" to "authenticated";

-- grant select on table "public"."profile" to "authenticated";

-- grant trigger on table "public"."profile" to "authenticated";

-- grant truncate on table "public"."profile" to "authenticated";

-- grant update on table "public"."profile" to "authenticated";

-- grant delete on table "public"."profile" to "service_role";

-- grant insert on table "public"."profile" to "service_role";

-- grant references on table "public"."profile" to "service_role";

-- grant select on table "public"."profile" to "service_role";

-- grant trigger on table "public"."profile" to "service_role";

-- grant truncate on table "public"."profile" to "service_role";

-- grant update on table "public"."profile" to "service_role";

-- grant delete on table "public"."smoothies" to "anon";

-- grant insert on table "public"."smoothies" to "anon";

-- grant references on table "public"."smoothies" to "anon";

-- grant select on table "public"."smoothies" to "anon";

-- grant trigger on table "public"."smoothies" to "anon";

-- grant truncate on table "public"."smoothies" to "anon";

-- grant update on table "public"."smoothies" to "anon";

-- grant delete on table "public"."smoothies" to "authenticated";

-- grant insert on table "public"."smoothies" to "authenticated";

-- grant references on table "public"."smoothies" to "authenticated";

-- grant select on table "public"."smoothies" to "authenticated";

-- grant trigger on table "public"."smoothies" to "authenticated";

-- grant truncate on table "public"."smoothies" to "authenticated";

-- grant update on table "public"."smoothies" to "authenticated";

-- grant delete on table "public"."smoothies" to "service_role";

-- grant insert on table "public"."smoothies" to "service_role";

-- grant references on table "public"."smoothies" to "service_role";

-- grant select on table "public"."smoothies" to "service_role";

-- grant trigger on table "public"."smoothies" to "service_role";

-- grant truncate on table "public"."smoothies" to "service_role";

-- grant update on table "public"."smoothies" to "service_role";

-- create policy "Enable delete for authenticated users only"
-- on "public"."profile"
-- as permissive
-- for delete
-- to public
-- using (true);


-- create policy "Enable read access for all users"
-- on "public"."profile"
-- as permissive
-- for delete
-- to public
-- using (true);


-- create policy "Public profile are viewable by everyone."
-- on "public"."profile"
-- as permissive
-- for select
-- to public
-- using (true);


-- create policy "Users can insert their own profile."
-- on "public"."profile"
-- as permissive
-- for insert
-- to public
-- with check ((auth.uid() = id));


-- create policy "Users can update own profile."
-- on "public"."profile"
-- as permissive
-- for update
-- to public
-- using ((auth.uid() = id));


-- create policy "Enable delete access for all users"
-- on "public"."smoothies"
-- as permissive
-- for delete
-- to public
-- using (true);


-- create policy "Enable insert access for all users"
-- on "public"."smoothies"
-- as permissive
-- for insert
-- to public
-- with check (true);


-- create policy "Enable read access for all users"
-- on "public"."smoothies"
-- as permissive
-- for select
-- to public
-- using (true);


-- create policy "Enable update access for all users"
-- on "public"."smoothies"
-- as permissive
-- for update
-- to public
-- using (true)
-- with check (true);