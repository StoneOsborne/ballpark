-- Create a table for public profiles
CREATE TABLE profile (
  id uuid primary key,
  updated_at timestamp with time zone,
  name text,
  email text,
  number INT,
  school text,
  membership text,
  active bool
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profile
  enable row level security;

create policy "Public profiles are viewable by everyone." on profile
  for select using (true);

create policy "Users can insert their own profile." on profile
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profile
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profile (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');

-- create table public.profile (
--     id Serial Primary Key,
--     updated_at timestamp with time zone,
--     name text,
--     email text
-- );

-- INSERT INTO profile(id, name, email)
-- VALUES ('1','Stone', 'FAKE');


-- create function public.handle_new_user()
-- returns trigger as $$
-- begin
--   insert into public.profile (id, updated_at, name, email)
--   values (new.id, new.raw_user_meta_data->>'updated_at', new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'email');
--   return new;
-- end;
-- $$ language plpgsql security definer;
-- create trigger on_auth_user_created
--   after insert on auth.users
--   for each row execute procedure public.handle_new_user();
