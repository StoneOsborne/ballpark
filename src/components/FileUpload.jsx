// import { useEffect, useState } from 'react'
// import supabase from "../supabaseClient"

// await supabase.storage.from('bucket_name').upload('file_path', file, {
//   upsert: true,
// })

export default function FileUpload() {

  return (
    <input type="file" label="Video" ></input>
  )
}