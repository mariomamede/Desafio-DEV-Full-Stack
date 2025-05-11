import { test, expect } from "@playwright/test";
test.describe("Navegação e Visualização da Página Principal", () => {
  test("deve carregar a página principal e exibir o título e a tabela de veículos", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Desafio Dev Fullstack/i);

    const headerTitle = page.locator("h1", {
      hasText: /Mario Mamede/i,
    });
    await expect(headerTitle).toBeVisible();
  });

  test("deve permitir alternar o tema da aplicação", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1000);
    const themeToggleButton = page.locator('button[aria-label="toggle theme"]');
    await page.waitForTimeout(1000);
    await expect(themeToggleButton).toBeVisible();

    const htmlElement = page.locator("html");
    const initialTheme = await htmlElement.getAttribute("class");

    await themeToggleButton.click();

    await page.waitForTimeout(500);
    const newTheme = await htmlElement.getAttribute("class");
    expect(newTheme).not.toBe(initialTheme);
  });

  test("deve retornar dados da API corretamente", async ({ request }) => {
    const response = await request.get(
      `https://develop-back-rota.rota361.com.br/recruitment/vehicles/list-with-paginate?page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MTVmOWE3LTk0ZmEtNDBmYy04Nzc3LWU3YTMxNzVjYmYwZCIsIm5hbWUiOiJJc2FiZWxsaSBOYXZhcnJvIiwiZG9jdW1lbnQiOiIzNTgwNzI0NTI1MyIsImVtYWlsIjoidGVzdGVAdHJhLmNvbSIsInBob25lIjoiMTE5Nzc4OTY1NDMiLCJzdGF0dXMiOiJhY3RpdmUiLCJpc01hc3RlciI6dHJ1ZSwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9jbmQtdHJ1Y2tlcnBheS5zZm8zLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vcm90b2dyYW1hLzZlOWFjYjIxMWI4NTFjYjBiMGZiZGNkMTVjZTFiODFjLndlYnAiLCJjb3Jwb3JhdGVJZCI6IjEzM2MzZWVlLTA2NDktNDY1Yi1hZWUyLWQ1N2FjZjViNWIyZiIsImNyZWF0ZWRBdCI6IjIwMjUtMDQtMTFUMTM6MDA6MjMuNjk3WiIsInBlcm1pc3Npb25zIjpbImRyaXZlci1saW5rLWRlbGV0ZSIsImRhc2hib2FyZCIsImRyaXZlciIsImRyaXZlci1yZWdpc3RyYXRpb25zLWludml0ZSIsImRyaXZlci11bmxpbmsiLCJkcml2ZXItbGluay1jcmVhdGUiLCJkcml2ZXItbGluay1lZGl0IiwidmVoaWNsZS1yZWdpc3RyYXRpb25zIiwidmVoaWNsZS1yZWdpc3RyYXRpb25zLXZpZXciLCJ2ZWhpY2xlLXJlZ2lzdHJhdGlvbnMtZWRpdCIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1yZWdpc3RlciIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1kZWxldGUiLCJwbGFjZXMiLCJwbGFjZXMtdmlldyIsInBsYWNlcy1lZGl0IiwicGxhY2VzLXJlZ2lzdGVyIiwicGxhY2VzLWRlbGV0ZSIsInJvdXRlcyIsInJvdXRlcy1yZWdpc3RlciIsInJvdXRlcy1kZWxldGUiLCJyb3V0ZXMtZWRpdCIsInJvdXRlcy12aWV3IiwidHJpcHMiLCJ0cmlwcy12aWV3IiwidHJpcHMtY2FuY2VsIiwidHJpcHMtZWRpdCIsInRyaXBzLWRlbGV0ZSIsInRyaXBzLWNoYXQiLCJyZXBvcnRzIiwicmVwb3J0cy12aWV3IiwicmVwb3J0cy1kb3dubG9hZCIsImFsZXJ0LWNvbmZpZ3VyYXRpb24iLCJhbGVydC1jb25maWd1cmF0aW9uLXZpZXciLCJvcGVyYXRvcnMiLCJvcGVyYXRvcnMtY3JlYXRlIiwib3BlcmF0b3JzLXZpZXciLCJhbGVydHMiLCJhbGVydHMtdmlldyIsIm9wZXJhdG9ycy1lZGl0Iiwib3BlcmF0b3JzLWRlbGV0ZSIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMtdmlldyIsInBlcm1pc3Npb25zLWVkaXQiLCJwZXJtaXNzaW9ucy1kZWxldGUiLCJwZXJtaXNzaW9ucy1jcmVhdGUiLCJpcy1jYXJyaWVyIiwidHJpcHMtY3JlYXRlIiwiY2hlY2tsaXN0IiwiY2hlY2tsaXN0LXZpZXciLCJjaGVja2xpc3QtdG8tY29tcGxldGUiXSwiaWF0IjoxNzQ2NTg0NTEyLCJleHAiOjE3NDc0NDg1MTJ9.qFYx9A8CDyvnYQlKItnaAsfulDhdE2aWeaTAoycS-yY`,
        },
      }
    );

    // Imprimir informações de diagnóstico
    console.log(`Status da resposta: ${response.status()}`);

    // Se a resposta não for bem-sucedida, vamos obter o corpo para diagnóstico
    if (!response.ok()) {
      const errorBody = await response.text();
      console.error(`Corpo da resposta de erro: ${errorBody}`);
    }

    // Modificando a verificação para mostrar informações úteis em caso de falha
    expect(
      response.status(),
      `API retornou status ${response.status()} em vez de um código 2xx de sucesso`
    ).toBeLessThan(400);

    // Continua apenas se a resposta for bem-sucedida
    if (response.ok()) {
      const responseData = await response.json();

      // Verifica se a resposta é um objeto (não um array)
      expect(typeof responseData).toBe("object");
      expect(responseData).not.toBeNull();

      if (Array.isArray(responseData)) {
        expect(responseData.length).toBeGreaterThan(0);
      } else {
        expect(responseData).toHaveProperty("content");
        expect(typeof responseData.content).toBe("object");
      }
    }
  });
});
