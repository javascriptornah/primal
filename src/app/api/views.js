import supabase from "../../../utils/supabaseClient";

export default async (req, res) => {
  return res.status(200);
  if (req.method === "POST") {
    // Call our stored procedure with the page_slug set by the request params slug
    await supabase.rpc("increment_page_view", {
      page_slug: req.body.slug,
    });
    return res.status(200).json({
      message: `Successfully incremented page: ${req.query.slug}`,
    });
  }

  if (req.method === "GET") {
    // Query the pages table in the database where slug equals the request params slug.
    const { data } = await supabase
      .from("pages")
      .select("view_count")
      .filter("slug", "eq", req.body.slug);

    if (data) {
      return res.status(200).json({
        total: data[0]?.view_count || null,
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
};
