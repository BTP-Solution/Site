import { getCloudflareContext } from '@opennextjs/cloudflare';
import { handleContact, type ContactEnvironment } from '@/lib/contact';

export async function POST(request: Request) {
    let environment: ContactEnvironment = {};
    try { environment = getCloudflareContext().env as ContactEnvironment; }
    catch { /* Plain Next.js has no rate-limit binding; delivery stays disabled. */ }
    return handleContact(request, environment);
}
