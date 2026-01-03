
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getSwimAdvice(userLevel: string, goal: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a ${userLevel} swimmer and my goal is to ${goal}. Can you give me 3 specific tips to improve? Please keep it concise and encouraging.`,
        config: {
          systemInstruction: "You are Coach Lalu, a professional and encouraging elite swimming coach. Provide concise, actionable, and safe swimming advice.",
        }
      });
      return response.text || "Keep paddling and practicing your breathing!";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I recommend focusing on your breathing rhythm and maintaining a consistent body position in the water.";
    }
  }
}

export const geminiService = new GeminiService();
