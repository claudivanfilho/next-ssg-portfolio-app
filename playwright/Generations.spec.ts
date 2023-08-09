import { expect, test } from "@playwright/test";

test("when initiated should render the generations page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("PokeSearch");
  await expect(page.locator("a")).toHaveCount(9);
});

test("when tried to access an invalid route should display an error message", async ({ page }) => {
  await page.goto("/test");
  await expect(page.locator("text=Page Not Found")).toBeDefined();
});

test("when clicked in a generation link should redirect to generation page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Generation I", exact: true }).click();

  await expect(page).toHaveURL(/.*\/generation\/1/);
});
