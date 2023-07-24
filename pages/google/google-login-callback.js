export default async function (req, res) {
  const code = req.query.code;

  try {
    const response = await this.$axios.post('http://localhost:8000/api/social/google/login/callback/', { code });
    const token = response.data.token;

    // Store the token or perform any other required actions
    // e.g., redirect to a dashboard page
    console.log('Received token:', token);
    res.redirect('/dashboard'); // Replace with your desired route
  } catch (error) {
    console.error(error);
    res.redirect('/login'); // Handle the error case as desired
  }
}